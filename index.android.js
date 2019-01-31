import React from "react";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000000",
    accent: "#EECB13",
    background: "#EFDD6C"
  }
};

export default class PlateTracker extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }
}

AppRegistry.registerComponent("PlateTracker", () => PlateTracker);
