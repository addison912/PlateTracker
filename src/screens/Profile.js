/* eslint-disable react-native/no-color-literals */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Appbar } from "react-native-paper";
import { Fonts } from "../utils/fonts";

class Profile extends React.Component {
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
            <Text style={styles.plateText}>PROFILE</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          title="Sign In"
          style={styles.button}
          onPress={() => {}}
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
        <Appbar style={styles.appbar}>
          <Appbar.Action color="#EECB13" icon="account-circle" />
          <Appbar.Action
            color="#EECB13"
            icon="camera"
            onPress={this.props.changeIndexScanner}
          />
          <Appbar.Action
            color="#EECB13"
            icon="list"
            onPress={this.props.changeIndexNewsFeed}
          />
        </Appbar>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  appbar: {
    bottom: 0,
    flex: 1,
    justifyContent: "space-evenly",
    left: 0,
    position: "absolute",
    right: 0
  },
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
