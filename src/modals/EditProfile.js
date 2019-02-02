/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from "react-native";
import { Button } from "react-native-paper";

class EditProfile extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modal === "EditProfile"}
        onRequestClose={() => {}}
      >
        <View style={modalStyles.modal}>
          <View>
            <Text>Edit Profile</Text>

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

export default EditProfile;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#FAFAFA",
    height: "100%",
    padding: 16
  }
});
