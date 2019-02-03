/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { Modal, View, StyleSheet } from "react-native";
import AddPostForm from "../forms/AddPostForm";

class AddPostModal extends Component {
  static title = "Add Post";

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modal === "AddPostModal"}
        onRequestClose={() => {}}
      >
        <View style={modalStyles.modal}>
          <View>
            <AddPostForm
              changeIndex={this.props.changeIndex}
              changeModal={this.props.changeModal}
              verified={this.props.verified}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default AddPostModal;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#FAFAFA",
    height: "100%",
    padding: 16
  }
});
