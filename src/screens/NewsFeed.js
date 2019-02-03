/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
import PostContainer from "../components/PostContainer";
import AddPostModal from "../modals/AddPostModal";
import SignInModal from "../modals/SignInModal";
import axios from "axios";
import { serverUrl } from "../config/constants";

class NewsFeed extends React.Component {
  state = {
    posts: []
  };

  handlePressAddPost = () => {
    if (this.props.verified) {
      this.props.changeModal("AddPostModal");
    } else {
      this.props.changeModal("SignInModal");
    }
  };

  getPosts = () => {
    console.log("getting posts");
    axios.get(`${serverUrl}/post/all`, {}).then(posts => {
      this.setState({
        posts: posts.data
      });
      console.log(this.state.posts);
    });
  };

  componentDidMount() {
    this.props.verifyLogin;
    this.getPosts();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.plate}>
          <View style={styles.plateTextContainer}>
            <Text style={styles.plateText}>News Feed</Text>
          </View>
        </View>
        <Button
          accessibilityRole="button"
          icon="create"
          mode="contained"
          color={"#EECB13"}
          style={styles.postButton}
          onPress={this.handlePressAddPost}
        >
          Add a post
        </Button>
        <PostContainer posts={this.state.posts} />
        <PlateTrackerAppBar
          changeIndex={this.props.changeIndex}
          verified={this.props.verified}
          newJWT={this.props.newJWT}
          modal={this.props.modal}
          changeModal={this.props.changeModal}
        />
        <AddPostModal
          changeIndex={this.props.changeIndex}
          verified={this.props.verified}
          newJWT={this.props.newJWT}
          modal={this.props.modal}
          changeModal={this.props.changeModal}
          verifyLogin={this.props.verifyLogin}
        />
      </View>
    );
  }
}

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    paddingBottom: 60
  },
  plate: {
    alignItems: "center",
    backgroundColor: "#020202",
    borderRadius: 6,
    height: 100,
    justifyContent: "center",
    marginTop: 12,
    width: "96%"
  },
  plateText: {
    color: "#EECB13",
    fontFamily: "LicensePlate",
    fontSize: 72
  },
  plateTextContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  postButton: {
    margin: 8,
    width: "96%"
  }
});
