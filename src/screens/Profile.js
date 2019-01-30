/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
const defaultAvatar = require("../assets/images/user.png");

class Profile extends React.Component {
  state = {
    avatar: "defaultAvatar"
  };

  componentDidMount() {
    this.setState({ avatar: defaultAvatar });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.profilPic} source={this.state.avatar} />
        <Text>Profile Info Here</Text>
        <Button mode="contained" onPress={() => {}} style={styles.button}>
          Edit
        </Button>
        <PlateTrackerAppBar changeIndex={this.props.changeIndex} />
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  button: {
    margin: 4
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start"
  },
  profilPic: {
    height: 200,
    margin: 24,
    width: 200
  }
});
