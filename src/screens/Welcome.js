/* eslint-disable react-native/no-color-literals */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";

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
        <TouchableHighlight
          style={styles.plate}
          onPress={this.props.handleOpenScanner}
          accessibilityRole="button"
        >
          <View style={styles.plateTextContainer}>
            <Text style={styles.welcome}>WELCOME TO</Text>
            <Text style={styles.plateText}>PLTE TRK</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          title="Sign In"
          style={styles.button}
          onPress={this.props.handleOpenScanner}
          accessibilityRole="button"
        >
          <Text style={styles.signIn}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Sign Up"
          onPress={() => {}}
          accessibilityRole="button"
        >
          <Text style={styles.signUp}>No account? No worries!</Text>
          <Text style={styles.signUpLink}>Sign up here!</Text>
        </TouchableOpacity>
        <PlateTrackerAppBar changeIndex={this.props.changeIndex} />
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
    marginTop: 24,
    width: 332
  },
  plateText: {
    color: "#EECB13",
    fontFamily: "LicensePlate",
    fontSize: 82,
    marginTop: 24
  },
  plateTextContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start"
  },
  signIn: {
    backgroundColor: "#EECB13",
    borderRadius: 6,
    color: "black",
    fontFamily: "Roboto",
    marginTop: 100,
    padding: 12,
    textAlign: "center",
    width: 100
  },
  signUp: {
    color: "black",
    fontFamily: "Roboto",
    marginTop: 16,
    textAlign: "center",
    width: 200
  },
  signUpLink: {
    color: "black",
    fontFamily: "RobotoBold",
    fontWeight: "bold",
    textAlign: "center",
    width: 200
  },
  welcome: {
    color: "#EECB13",
    fontFamily: "RobotoBold",
    marginTop: 8,
    textAlign: "center"
  }
});
