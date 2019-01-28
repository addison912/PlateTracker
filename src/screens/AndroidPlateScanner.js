/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Appbar } from "react-native-paper";
import Camera from "../components/camera";

export default class AndroidPlateScanner extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill
      },
      plate: "Scan a plate",
      confidence: ""
    };
  }

  onPlateRecognized = ({ plate, confidence }) => {
    if (confidence > 90) {
      this.setState({
        plate,
        confidence: `Confidence: ${confidence}`
      });
    }
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
          captureQuality={Camera.constants.CaptureQuality.high}
          country="us"
          onPlateRecognized={this.onPlateRecognized}
          plateOutlineColor="#00ff00"
          showPlateOutline
          torchMode={Camera.constants.TorchMode.off}
          touchToFocus
        />
        <View style={styles.textContainer}>
          <Text style={styles.plate}>{this.state.plate}</Text>
          <Text style={styles.confidence}>{this.state.confidence}</Text>
        </View>
        <Appbar style={styles.appbar}>
          <Appbar.Action
            color="#EECB13"
            icon="account-circle"
            onPress={() => {}}
          />
          <Appbar.Action color="#EECB13" icon="camera" onPress={() => {}} />
          <Appbar.Action color="#EECB13" icon="list" onPress={() => {}} />
        </Appbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    bottom: 0,
    flex: 1,
    justifyContent: "space-evenly",
    left: 0,
    position: "absolute",
    right: 0
  },
  confidence: {
    fontSize: 14,
    padding: 10,
    textAlign: "center"
  },
  container: {
    flex: 1
  },
  plate: {
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
