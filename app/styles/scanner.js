import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  confidence: {
    fontSize: 14,
    padding: 10,
    textAlign: "center"
  },
  container: {
    flex: 1
  },
  plate: {
    fontSize: 24,
    padding: 10,
    textAlign: "center"
  },
  preview: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end"
  },
  textContainer: {
    backgroundColor: "#EECB13",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  }
});

module.exports = styles;
