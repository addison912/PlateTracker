/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from "react-native";

class SignInModal extends Component {
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
            <Text>Sign In</Text>

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

export default SignInModal;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#EFDD6C",
    height: "100%",
    padding: 16
  }
});
