/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
import EditProfile from "../modals/EditProfile";
const defaultAvatar = require("../assets/images/user.png");
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
        <Button
          mode="contained"
          onPress={() => this.props.changeModal("EditProfile")}
          style={styles.button}
        >
          <Icon name="account-edit" style={styles.icon} size={18} />
          <Text> Edit Profile</Text>
        </Button>
        <EditProfile
          modal={this.props.modal}
          changeModal={this.props.changeModal}
        />
        <PlateTrackerAppBar
          changeIndex={this.props.changeIndex}
          jwt={this.props.jwt}
        />
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
  icon: {
    color: "#EECB13"
  },
  profilPic: {
    height: 200,
    margin: 24,
    width: 200
  }
});
