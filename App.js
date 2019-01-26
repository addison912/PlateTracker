import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { BottomNavigation, DefaultTheme } from "react-native-paper";
import PlateTracker from "./app/components/AndroidPlateScanner";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <PlateTracker />
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
