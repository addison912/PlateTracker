/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { Modal, View, StyleSheet } from "react-native";
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
            <SignInForm
              newJWT={this.props.newJWT}
              changeModal={this.props.changeModal}
              changeIndex={this.props.changeIndex}
            />
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
