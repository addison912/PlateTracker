import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import PlateTracker from "./app/components/scanner";

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
