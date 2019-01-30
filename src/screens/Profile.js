/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
        <PlateTrackerAppBar changeIndex={this.props.changeIndex} />
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
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
