/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { Modal, View, StyleSheet } from "react-native";
import EditProfileForm from "../forms/EditProfileForm";

class EditProfile extends Component {
  static title = "Add Post";

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
            <EditProfileForm
              changeModal={this.props.changeModal}
              changeIndex={this.props.changeIndex}
            />
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
