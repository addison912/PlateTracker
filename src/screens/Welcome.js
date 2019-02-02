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
import SignInModal from "../modals/SignInModal";
import SignUpModal from "../modals/SignUpModal";
const backgroundImage = require("../assets/images/motorcycle.jpg");

class Welcome extends React.Component {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
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
          <View style={styles.auth}>
            <TouchableOpacity
              title="Sign In"
              style={styles.button}
              onPress={() => this.props.changeModal("SignInModal")}
              accessibilityRole="button"
            >
              <Text style={styles.signIn}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="Sign Up"
              accessibilityRole="button"
              onPress={() => this.props.changeModal("SignUpModal")}
              style={styles.signUp}
            >
              <Text style={styles.signUpText}>No account? No worries!</Text>
              <Text style={styles.signUpLink}>Sign up here!</Text>
            </TouchableOpacity>
          </View>
          <SignInModal
            newJWT={this.props.newJWT}
            modal={this.props.modal}
            changeModal={this.props.changeModal}
            changeIndex={this.props.changeIndex}
          />
          <SignUpModal
            newJWT={this.props.newJWT}
            modal={this.props.modal}
            changeModal={this.props.changeModal}
            changeIndex={this.props.changeIndex}
          />
          <PlateTrackerAppBar
            changeIndex={this.props.changeIndex}
            verified={this.props.verified}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  auth: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    marginTop: 256
  },
  background: { height: "100%", width: "100%" },
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
    marginTop: 44,
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
    padding: 12,
    textAlign: "center",
    width: 140
  },
  signUp: {
    marginTop: 12
  },
  signUpLink: {
    color: "white",
    fontFamily: "RobotoBold",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: 200
  },
  signUpText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 18,
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
