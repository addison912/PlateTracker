/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

class SignInForm extends Component {
  state = {
    text: "",
    username: "",
    outlinedText: "",
    password: null,
    icEye: "visibility-off",
    passwordHidden: true,
    validPassword: true
  };

  componentWillUnmount() {
    this.setState({ text: "", name: "", outlinedText: "" });
  }

  handleChangePassword = password => {
    this.setState({ password });
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/.test(this.state.password)
      ? this.setState({ validPassword: true })
      : this.setState({ validPassword: false });
  };

  _isUsernameValid = () => /^[a-zA-Z0-9]*$/.test(this.state.username);

  hideShowPassword = () => {
    if (this.state.passwordHidden) {
      this.setState({
        icEye: "visibility",
        passwordHidden: false
      });
    } else {
      this.setState({
        icEye: "visibility-off",
        passwordHidden: true
      });
    }
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
            onChange={this._isPasswordValid}
            value={this.state.username}
            error={!this._isUsernameValid()}
            onChangeText={username => this.setState({ username })}
            text="white"
            underlineColorAndroid={"rgba(255,255,255,1)"}
          />
          <HelperText type="error" visible={!this._isUsernameValid()}>
            Error: Only letters and numbers are allowed
          </HelperText>
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            secureTextEntry={this.state.passwordHidden}
            mode="outlined"
            label="PASSWORD"
            value={this.state.password}
            error={!this.state.validPassword}
            onChangeText={password => this.handleChangePassword(password)}
          />
          <Icon
            style={styles.icon}
            name={this.state.icEye}
            size={24}
            onPress={this.hideShowPassword}
          />
          <HelperText type="error" visible={!this.state.validPassword}>
            Error: Password must be at least 8 characters long and contain at
            least one number, one uppercase letter and one lowercase letter
          </HelperText>
        </View>
        <Button
          accessibilityRole="button"
          mode="contained"
          color="#F6F6F6"
          onPress={() => this.props.changeModal(false)}
          style={styles.button}
        >
          Close
        </Button>
        <Button
          accessibilityRole="button"
          mode="contained"
          color="#EFCD00"
          onPress={() => this.props.changeModal(false)}
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
