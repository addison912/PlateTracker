import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./app/App";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow"
  }
};

export default class PlateTracker extends React.Component {
  render() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }
}

AppRegistry.registerComponent("PlateTracker", () => PlateTracker);
