import React from "react";
// import { View, Text } from "react-native";
import AndroidPlateScanner from "./components/AndroidPlateScanner";

import Welcome from "./screens/Welcome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    {
      return this.state.index === 1 ? <AndroidPlateScanner /> : <Welcome />;
    }
  }
}

//
