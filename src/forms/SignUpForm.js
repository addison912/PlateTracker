/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ScrollView,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button, TextInput, HelperText } from "react-native-paper";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import { serverUrl } from "../config/constants";

class SignUpForm extends Component {
  state = {
    text: "",
    outlinedText: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: null,
    confirmPassword: null,
    validUsername: true,
    validPassword: true,
    validConfirmPassword: true,
    validEmail: true
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

  confirmPassword = confirmPassword => {
    this.setState({ confirmPassword });
    this.state.password === confirmPassword
      ? this.setState({ validConfirmPassword: true })
      : this.setState({ validConfirmPassword: false });
  };

  isUsernameValid = username => {
    this.setState({ username });
    /^[a-zA-Z0-9]*$/.test(this.state.username)
      ? this.setState({ validUsername: true })
      : this.setState({ validUsername: false });
  };

  isEmailValid = email => {
    this.setState({ email });
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(
      this.state.email
    )
      ? this.setState({ validEmail: true })
      : this.setState({ validEmail: false });
  };

  handleSignUp = () => {
    console.log("attempting to sign up user");
    // if (
    //   this.state.validUsername &&
    //   this.state.validEmail &&
    //   this.state.validPassword &&
    //   this.state.validConfirmPassword &&
    //   this.state.password.length >= 8 &&
    //   this.state.username.length >= 6 &&
    //   this.state.email.length >= 6
    // ) {
    //   let user = {
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     username: this.state.username,
    //     password: this.state.password,
    //     email: this.state.email
    //   };
    //   axios({
    //     method: "POST",
    //     url: `${serverUrl}/user/signup`,
    //     data: user,
    //     config: {
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json"
    //       }
    //     }
    //   })
    //     .then(res => {
    //       console.log(res);
    //       let user = res.data.user;
    //       deviceStorage.saveItem("id_token", res.data.jwt);
    //       deviceStorage.saveItem("currentUser", JSON.stringify(user));
    //       this.props.newJWT(res.jwt, user);
    //       this.props.changeIndex("NewsFeed");
    //       this.props.changeModal(false);
    //     })
    //     .catch(error => {
    //       if (error.response.status === 401)
    //         alert("Invalid username or password");
    //       console.log(error);
    //     });
    // }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
        keyboardVerticalOffset={80}
      >
        <ScrollView>
          <View style={styles.inputContainerStyle}>
            <TextInput
              mode="outlined"
              label="FIRST NAME"
              value={this.state.firstName}
              onChangeText={firstName => this.setState({ firstName })}
            />
          </View>
          <View style={styles.inputContainerStyle}>
            <TextInput
              mode="outlined"
              label="LAST NAME"
              value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })}
            />
          </View>
          <View style={styles.inputContainerStyle}>
            <TextInput
              mode="outlined"
              label="EMAIL"
              onChange={this.isEmailValid}
              value={this.state.email}
              error={!this.state.validEmail}
              onChangeText={email => this.isEmailValid({ email })}
            />
            <Icon style={styles.icon} name={"star-of-life"} size={10} />
            <HelperText type="error" visible={!this.state.validEmail}>
              Error: Invalid email address
            </HelperText>
          </View>
          <View style={styles.inputContainerStyle}>
            <TextInput
              mode="outlined"
              label="USERNAME"
              value={this.state.username}
              error={!this.state.validUsername}
              onChangeText={username => this.isUsernameValid(username)}
            />
            <Icon style={styles.icon} name={"star-of-life"} size={10} />
            <HelperText type="error" visible={!this.state.validUsername}>
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
            <Icon style={styles.icon} name={"star-of-life"} size={10} />
            <HelperText type="error" visible={!this.state.validPassword}>
              Error: Invalid password.
            </HelperText>
          </View>
          <View style={styles.inputContainerStyle}>
            <TextInput
              secureTextEntry={true}
              mode="outlined"
              label="CONFIRM PASSWORD"
              value={this.state.confirmPassword}
              error={!this.state.validConfirmPassword}
              onChangeText={confirmPassword =>
                this.confirmPassword(confirmPassword)
              }
            />
            <Icon style={styles.icon} name={"star-of-life"} size={10} />
            <HelperText type="error" visible={!this.state.validConfirmPassword}>
              Error: Passwords do not match.
            </HelperText>
          </View>
          <Button
            accessibilityRole="button"
            mode="contained"
            color="#000000"
            onPress={this.handleSignUp}
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
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpForm;

const styles = StyleSheet.create({
  button: {
    marginBottom: 12
  },
  icon: {
    color: "#f00",
    position: "absolute",
    right: 16,
    top: 30
  }
});
