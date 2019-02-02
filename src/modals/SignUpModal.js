/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { Modal, View, StyleSheet } from "react-native";
import SignUpForm from "../forms/SignUpForm";

class SignUpModal extends Component {
  static title = "Sign Up";

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modal === "SignUpModal"}
        onRequestClose={() => {}}
      >
        <View style={modalStyles.modal}>
          <View>
            <SignUpForm
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

export default SignUpModal;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#FAFAFA",
    height: "100%",
    padding: 16
  }
});
