/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleSignIn = () => {
    console.log("sign in pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.plate} onPress={this.props.handleOpenScanner}>
          <Text style={styles.plateText}>PLTE•TKR</Text>
        </View>
        <Button title="Sign In" onPress={this.props.handleOpenScanner} />
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
    height: 157,
    justifyContent: "center",
    margin: 40,
    width: 366
  },
  plateText: {
    color: "yellow",
    fontSize: 40
  }
});
