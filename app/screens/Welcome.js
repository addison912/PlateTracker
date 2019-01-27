/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.plate}>
          <Text style={styles.plateText}>PLTE•TKR</Text>
        </View>
        <Button title="Sign In" />
      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  plate: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 6,
    height: 80,
    justifyContent: "center",
    margin: 40,
    width: 200
  },
  plateText: {
    color: "yellow",
    fontSize: 40
  }
});
