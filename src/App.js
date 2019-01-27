import React from "react";
// import { View, Text } from "react-native";
import AndroidPlateScanner from "./screens/AndroidPlateScanner";

import Welcome from "./screens/Welcome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleOpenScanner = () => {
    console.log("pressed plte•trk");
    this.setState({
      index: 1
    });
  };

  render() {
    {
      return this.state.index === 1 ? (
        <AndroidPlateScanner />
      ) : (
        <Welcome handleOpenScanner={this.handleOpenScanner} />
      );
    }
  }
}

//
