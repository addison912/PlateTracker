/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import { serverUrl } from "../config/constants";

const options = {
  title: "Select an image",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class AddPostForm extends Component {
  state = {
    text: "",
    outlinedText: "",
    title: "",
    picture: null,
    body: "",
    user: {}
  };

  selectPhoto = () => {
    console.log("pressed image button");
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          picture: source
        });
      }
    });
  };
  //   handleSubmit = () => {
  //     console.log("handle submit activated");
  //     let user = {
  //       username: this.state.username,
  //       password: this.state.password
  //     };
  //     console.log(user);
  //     axios({
  //       method: "POST",
  //       url: `${serverUrl}/user/login`,
  //       data: user,
  //       config: {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/x-www-form-urlencoded"
  //         }
  //       }
  //     })
  //       .then(res => {
  //         console.log(res.data);
  //         let user = res.data.user;
  //         deviceStorage.saveItem("id_token", res.data.jwt);
  //         deviceStorage.saveItem("currentUser", JSON.stringify(user));
  //         this.props.newJWT(res.data.jwt, user);
  //         this.props.changeIndex("NewsFeed");
  //         this.props.changeModal(false);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   };

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
            maxLength={32}
            label="TITLE"
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
          <Icon style={styles.requiredIcon} name={"star-of-life"} size={10} />
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            maxLength={32}
            label="BODY"
            value={this.state.body}
            onChangeText={title => this.setState({ title })}
          />
          <Icon style={styles.requiredIcon} name={"asterisk"} size={10} />
        </View>
        <Button
          accessibilityRole="button"
          mode="contained"
          color="#85FF8E"
          onPress={this.selectPhoto}
          style={styles.imageButton}
        >
          <Icon style={styles.imageIcon} name={"file-image"} size={24} />
          Add an image
        </Button>
        <Button
          accessibilityRole="button"
          mode="contained"
          color="#000000"
          onPress={this.handleSubmit}
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
    color: "#000",
    left: 16,
    marginRight: 10,
    position: "absolute",
    top: 20
  },
  requiredIcon: {
    color: "#f00",
    position: "absolute",
    right: 16,
    top: 30
  }
});
