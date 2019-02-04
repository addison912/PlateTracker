/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

class AddPostForm extends Component {
  state = {
    text: "",
    outlinedText: ""
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
        keyboardVerticalOffset={80}
      >
        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            maxLength={64}
            label="TITLE"
            value={this.props.title}
            onChangeText={title => this.props.handleChangeTitle(title)}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />
          <Icon style={styles.requiredIcon} name={"star-of-life"} size={10} />
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            maxLength={144}
            label="BODY"
            value={this.props.body}
            numberOfLines={4}
            multiline={true}
            onChangeText={body => this.props.handleChangeBody(body)}
            ref={input => {
              this.secondTextInput = input;
            }}
          />
          <Icon style={styles.requiredIcon} name={"asterisk"} size={10} />
        </View>
        <View style={styles.pictureName}>
          <Text>{this.props.imageName}</Text>
        </View>
        <Button
          accessibilityRole="button"
          mode="contained"
          color=""
          onPress={this.props.selectPhoto}
          style={styles.imageButton}
        >
          <Icon style={styles.imageIcon} name={"file-image"} size={24} />
          <Text> Add an image</Text>
        </Button>
        <Button
          accessibilityRole="button"
          mode="contained"
          color="#000000"
          onPress={this.props.handleSubmit}
          style={styles.button}
        >
          Submit
        </Button>
        <Button
          accessibilityRole="button"
          mode="contained"
          color="#EFCD00"
          onPress={() => this.props.changeModal(false)}
          style={styles.button}
        >
          Close
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

export default AddPostForm;

const styles = StyleSheet.create({
  button: {
    marginBottom: 12
  },
  imageButton: {
    marginBottom: 12,
    marginTop: 12
  },
  imageIcon: {
    color: "#FFF",
    left: 16,
    marginRight: 10,
    position: "absolute",
    top: 20
  },
  pictureName: {
    alignItems: "center",
    flex: 1,
    height: 30,
    marginBottom: 12,
    marginTop: 12
  },
  requiredIcon: {
    color: "#f00",
    position: "absolute",
    right: 16,
    top: 30
  }
});
