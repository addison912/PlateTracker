import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    padding: 10
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

module.exports = styles;
