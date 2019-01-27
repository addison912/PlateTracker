import React from "react";
import { AppRegistry, View, Text } from "react-native";
import { BottomNavigation } from "react-native-paper";
import AndroidPlateScanner from "./components/AndroidPlateScanner";
import BottomNav from "./components/BottomNav";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  render() {
    {
      return this.state.index === 1 ? (
        <AndroidPlateScanner />
      ) : (
        <View>
          <Text>Nope</Text>
        </View>
      );
    }
  }
}

AppRegistry.registerComponent("App", () => App);
