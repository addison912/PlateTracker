/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { AppRegistry, View } from "react-native";

import Camera from "react-native-openalpr";

export default class PlateTracker extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill
      },
      plate: "Scan a plate"
    };
  }

  onPlateRecognized = ({ plate, confidence }) => {
    if (confidence > 88) {
      this.setState({
        plate
      });
    }
  };

  render() {
    return <View />;
  }
}

AppRegistry.registerComponent("PlateTracker", () => PlateTracker);
