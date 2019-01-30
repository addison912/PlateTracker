/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from "react-native";

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

            <TouchableHighlight
              accessibilityRole="button"
              onPress={() => this.props.changeModal(false)}
            >
              <Text>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

export default SignUpModal;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#EFDD6C",
    height: "100%",
    padding: 16
  }
});
