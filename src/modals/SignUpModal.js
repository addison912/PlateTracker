/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

class SignUpModal extends Component {
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
            <Text>Sign Up</Text>

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

export default SignUpModal;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#FFF9D0",
    height: "100%",
    padding: 16
  },
  closeButton: {
    margin: 4
  }
});
