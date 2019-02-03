/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  AsyncStorage
} from "react-native";
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
    user: null,
    text: "",
    outlinedText: "",
    title: "",
    picture: null,
    imageName: null,
    body: ""
  };

  componentDidMount() {
    AsyncStorage.getItem("currentUser", (err, result) => {
      if (!err) {
        if (result !== null) {
          this.setState({ user: result });
          console.log(this.state.user);
        }
      } else {
        console.log(err);
      }
    });
  }

  selectPhoto = () => {
    console.log("pressed image button");
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const picture = {
          uri: "data:image/jpeg;base64," + response.data,
          imageType: response.type,
          name: response.fileName
        };
        console.log(response);
        // const source = { uri: "data:image/jpeg;base64," + response.data };
        this.setState({
          picture,
          imageName: response.fileName
        });
        console.log("picture set to state");
      }
    });
  };

  handleSubmit = () => {
    console.log(this.state.user);
    console.log("submitting post");
    let date = new Date();
    let post = {
      title: this.state.title,
      body: this.state.body,
      date: date,
      picture: this.state.picture.uri,
      userId: this.state.user._id
    };
    axios({
      method: "POST",
      url: `${serverUrl}/post`,
      data: post,
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    })
      .then(res => {
        console.log(res);
        this.props.changeIndex("NewsFeed");
        this.props.changeModal(false);
      })
      .catch(error => {
        console.log(error);
      });
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
            maxLength={144}
            label="BODY"
            value={this.state.body}
            numberOfLines={4}
            multiline={true}
            onChangeText={body => this.setState({ body })}
          />
          <Icon style={styles.requiredIcon} name={"asterisk"} size={10} />
        </View>
        <View style={styles.pictureName}>
          <Text>{this.state.imageName}</Text>
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
  picture: {
    alignItems: "center",
    flex: 1,
    height: 144,
    marginBottom: 12
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
