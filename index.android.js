import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./App";

export default class AndroidIndex extends React.Component {
  render() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }
}

AppRegistry.registerComponent("AndroidIndex", () => AndroidIndex);
