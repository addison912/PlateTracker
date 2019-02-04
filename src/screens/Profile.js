/* eslint-disable react-native/no-color-literals */
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  ScrollView
} from "react-native";
import { FAB, Title } from "react-native-paper";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
import EditProfile from "../modals/EditProfile";
const defaultAvatar = require("../assets/images/user.png");
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { serverUrl } from "../config/constants";
import ProfilePostContainer from "../components/ProfilePostContainer";
import PostContainer from "../components/PostContainer";

class Profile extends React.Component {
  state = {
    avatar: "",
    userId: null,
    user: null,
    userName: "",
    posts: []
  };

  componentDidMount() {
    this.setState({ avatar: defaultAvatar });
    this.props.verifyLogin;
    AsyncStorage.getItem("currentUser", (err, result) => {
      if (!err) {
        if (result !== null) {
          let user = JSON.parse(result);
          this.setState({ userId: user._id });
          console.log(this.state.userId);
          this.getUserProfile(this.state.userId);
          this.getUserPosts(this.state.userId);
        }
      } else {
        console.log(err);
      }
    });
  }

  getUserProfile = userId => {
    console.log("here too", userId);
    axios.get(`${serverUrl}/user/profile/${userId}`).then(response => {
      if (response.data.user.avatar) {
        this.setState({
          avatar: { uri: `${serverUrl}${response.data.user.avatar}` }
        });
      }
      this.setState({
        user: response.data.user,
        userName: response.data.user.firstName || response.data.user.username
      });
      console.log(this.state.user);
    });
  };

  getUserPosts = userId => {
    axios.get(`${serverUrl}/post/user/${userId}`).then(posts => {
      if (Array.isArray(posts.data)) {
        posts.data.reverse();
      }
      this.setState({
        posts: posts.data
      });
      console.log(this.state.posts);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.content}
        >
          <View style={styles.container}>
            <Image style={styles.profilPic} source={this.state.avatar} />
            <FAB
              mode="contained"
              small
              onPress={() => this.props.changeModal("EditProfile")}
              style={styles.fab}
              icon="edit"
            />
            <View style={styles.container}>
              <Title style={styles.welcome}>
                Welcome back {this.state.userName}!
              </Title>
            </View>
            <ProfilePostContainer
              posts={this.state.posts}
              // style={styles.postContainer}
            />
          </View>
        </ScrollView>
        <EditProfile
          modal={this.props.modal}
          changeModal={this.props.changeModal}
        />
        <PlateTrackerAppBar
          style={styles.postContainer}
          changeIndex={this.props.changeIndex}
          verified={this.props.verified}
          newJWT={this.props.newJWT}
          modal={this.props.modal}
          changeModal={this.props.changeModal}
        />
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  content: {
    padding: 4
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start"
  },
  fab: {
    position: "absolute",
    right: 140,
    top: 192
  },
  profilPic: {
    alignSelf: "center",
    borderRadius: 100,
    height: 200,
    margin: 24,
    width: 200
  },
  welcome: {
    marginBottom: 12
  }
});
