import React from "react";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";

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
