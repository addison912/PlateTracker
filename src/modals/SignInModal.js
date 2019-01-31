/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import SignInForm from "../forms/SignInForm";

type State = {
  text: string,
  name: string,
  outlinedText: string
};

class SignInModal extends Component {
  static title = "Sign In";

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modal === "SignInModal"}
        onRequestClose={() => {}}
      >
        <View style={modalStyles.modal}>
          <View>
            <Text>SIGN IN</Text>
            <SignInForm />
            <Button
              accessibilityRole="button"
              icon="close"
              mode="contained"
              onPress={() => this.props.changeModal(false)}
              style={modalStyles.closeButton}
            >
              Close
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}

export default SignInModal;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#EFDD6C",
    height: "100%",
    padding: 16
  }
});
