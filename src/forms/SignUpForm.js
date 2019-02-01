/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import { serverUrl } from "../config/constants";

class SignInForm extends Component {
  state = {
    text: "",
    outlinedText: "",
    username: "",
    password: null,
    validPassword: true,
    validUsername: true
  };

  componentWillUnmount() {
    this.setState({ text: "", name: "", outlinedText: "" });
  }

  isPasswordValid = password => {
    this.setState({ password });
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/.test(this.state.password)
      ? this.setState({ validPassword: true })
      : this.setState({ validPassword: false });
  };

  isUsernameValid = () => /^[a-zA-Z0-9]*$/.test(this.state.username);

  handleSubmit = () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    axios({
      method: "POST",
      url: `${serverUrl}/user/login`,
      data: user,
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    })
      .then(res => {
        console.log(res);
        let user = res.data.user;
        deviceStorage.saveItem("id_token", res.data.jwt);
        deviceStorage.saveItem("currentUser", JSON.stringify(user));
        this.props.newJWT(res.jwt, user);
        this.props.changeIndex("NewsFeed");
        this.props.changeModal(false);
      })
      .catch(error => {
        if (error.response.status === 401)
          alert("Invalid username or password");
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
            label="USERNAME"
            onChange={this.isUsernameValid}
            value={this.state.username}
            error={!this.isUsernameValid()}
            onChangeText={username => this.setState({ username })}
          />
          <HelperText type="error" visible={!this.isUsernameValid()}>
            Error: Only letters and numbers are allowed
          </HelperText>
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            secureTextEntry={true}
            mode="outlined"
            label="PASSWORD"
            value={this.state.password}
            error={!this.state.validPassword}
            onChangeText={password => this.isPasswordValid(password)}
          />
          <HelperText type="error" visible={!this.state.validPassword}>
            Error: Password must be at least 8 characters long and contain at
            least one number, one uppercase letter and one lowercase letter
          </HelperText>
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            secureTextEntry={true}
            mode="outlined"
            label="CONFIRM PASSWORD"
            value={this.state.confirmPassword}
            error={!this.state.confirmPassword}
            onChangeText={password => this.confirmPassword(password)}
          />
          <HelperText type="error" visible={!this.state.validPassword}>
            Error: Password must be at least 8 characters long and contain at
            least one number, one uppercase letter and one lowercase letter
          </HelperText>
        </View>
        <Button
          accessibilityRole="button"
          mode="contained"
          color="#EFCD00"
          onPress={() => this.props.changeModal(false)}
          style={styles.button}
        >
          Close
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
      </KeyboardAvoidingView>
    );
  }
}

export default SignInForm;

const styles = StyleSheet.create({
  button: {
    marginBottom: 12
  },
  icon: {
    color: "#000",
    position: "absolute",
    right: 12,
    top: 24
  }
});
