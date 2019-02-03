/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
import Camera from "../components/camera";
import axios from "axios";
import { serverUrl } from "../config/constants";

export default class AndroidPlateScanner extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill
      },
      rotate: false,
      torch: false,
      country: "us",
      plate: "Scan a plate",
      confidence: ""
    };
  }

  onPlateRecognized = ({ plate, confidence }) => {
    if (confidence > 90) {
      this.setState({
        plate,
        confidence: `Confidence: ${confidence}%`
      });
    }
    axios.get(`${serverUrl}/stolen-vehicles/${plate}`, {}).then(stolenPlate => {
      if (stolenPlate.data.licensePlate) {
        alert(
          `${stolenPlate.data.color} ${stolenPlate.data.make} ${
            stolenPlate.data.model
          } with license plate "${
            stolenPlate.data.licensePlate
          }" has been reported as stolen!`
        );
      }
    });
  };

  render() {
    console.log(
      `plate: ${this.state.plate} - confidence level: ${this.state.confidence}`
    );
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureQuality={"high"}
          country={this.state.country}
          onPlateRecognized={this.onPlateRecognized}
          plateOutlineColor="#FFFFFF"
          showPlateOutline
          torchMode={Camera.constants.TorchMode.off}
          touchToFocus
        />
        <View style={styles.textContainer}>
          <Text style={styles.plate}>{this.state.plate}</Text>
          <Text style={styles.confidence}>{this.state.confidence}</Text>
        </View>
        <PlateTrackerAppBar
          changeIndex={this.props.changeIndex}
          verified={this.props.verified}
          newJWT={this.props.newJWT}
          modal={this.props.modal}
          changeModal={this.props.changeModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  confidence: {
    fontFamily: "RobotoBold",
    fontSize: 14,
    height: 44,
    padding: 10,
    textAlign: "center"
  },
  container: {
    flex: 1
  },
  plate: {
    backgroundColor: "black",
    color: "#EECB13",
    fontFamily: "LicensePlate",
    fontSize: 24,
    padding: 10,
    textAlign: "center"
  },
  preview: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end"
  },
  textContainer: {
    backgroundColor: "#EECB13",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  }
});
