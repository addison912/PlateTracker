/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";

class SignInForm extends Component {
  state = {
    text: "",
    username: "",
    outlinedText: "",
    password: ""
  };

  componentWillUnmount() {
    this.setState({ text: "", name: "", outlinedText: "" });
  }

  _isUsernameValid = () => /^[a-zA-Z0-9]*$/.test(this.state.username);

  _isPasswordValid = () =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/.test(
      this.state.password
    );

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
            value={this.state.username}
            error={!this._isUsernameValid()}
            onChangeText={username => this.setState({ username })}
          />
          <HelperText type="error" visible={!this._isUsernameValid()}>
            Error: Only letters and numbers are allowed
          </HelperText>
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            label="Password"
            value={this.state.username}
            error={!this._isPasswordValid()}
            onChangeText={password => this.setState({ password })}
          />
          <HelperText type="error" visible={!this._isUsernameValid()}>
            Error: Only letters and numbers are allowed
          </HelperText>
        </View>
        <Button />
      </KeyboardAvoidingView>
    );
  }
}

export default SignInForm;

const styles = StyleSheet.create({});
