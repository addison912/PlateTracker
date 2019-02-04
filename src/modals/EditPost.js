/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { Modal, View, StyleSheet } from "react-native";
import AddPostForm from "../forms/AddPostForm";

class AddPost extends Component {
  static title = "Add Post";

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modal === "AddPost"}
        onRequestClose={() => {}}
      >
        <View style={modalStyles.modal}>
          <View>
            <AddPostForm
              changeModal={this.props.changeModal}
              changeIndex={this.props.changeIndex}
              handleSubmit={this.props.handleSubmit}
              selectPhoto={this.props.selectPhoto}
              title={this.props.title}
              body={this.props.body}
              imageName={this.props.imageName}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default AddPost;

const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#FAFAFA",
    height: "100%",
    padding: 16
  }
});
