/* eslint-disable react-native/no-color-literals */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
const backgroundImage = require("../assets/images/motorcycle.jpg");

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
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%", height: "100%" }}
      >
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
      </ImageBackground>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between"
  },
  plate: {
    alignItems: "center",
    backgroundColor: "#020202",
    borderRadius: 6,
    height: 157,
    justifyContent: "center",
    marginBottom: 140,
    marginTop: 40,
    width: 332
  },
  plateText: {
    color: "#EECB13",
    fontFamily: "LicensePlate",
    fontSize: 84,
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
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 160,
    padding: 12,
    textAlign: "center",
    width: 140
  },
  signUp: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 18,
    marginTop: 12,
    textAlign: "center",
    width: 200
  },
  signUpLink: {
    color: "white",
    fontFamily: "RobotoBold",
    fontSize: 18,
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
