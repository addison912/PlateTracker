/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Button } from "react-native-paper";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
import PostContainer from "../components/PostContainer";
import AddPostModal from "../modals/AddPostModal";
import axios from "axios";
import { serverUrl } from "../config/constants";
import ImagePicker from "react-native-image-picker";

const options = {
  title: "Select an image",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class NewsFeed extends React.Component {
  state = {
    posts: [],
    title: "",
    picture: null,
    imageName: null,
    body: "",
    user: {}
  };

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
    let user = JSON.parse(this.state.user);
    console.log(user);
    console.log("submitting post");
    let date = new Date();
    let post = {
      title: this.state.title,
      body: this.state.body,
      date: date,
      picture: this.state.picture.uri,
      userId: user._id
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
      if (Array.isArray(posts.data)) {
        posts.data.reverse();
      }

      this.setState({
        posts: posts.data
      });
      console.log(this.state.posts);
    });
  };

  componentDidMount() {
    this.props.verifyLogin;
    this.getPosts();
    AsyncStorage.getItem("currentUser", (err, result) => {
      if (!err) {
        if (result !== null) {
          this.setState({ user: result });
          let user = JSON.parse(this.state.user);
          console.log(user._id);
        }
      } else {
        console.log(err);
      }
    });
  }

  handleChangeBody = body => {
    this.setState({
      body
    });
  };

  handleChangeTitle = title => {
    this.setState({
      title
    });
  };

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
          handleSubmit={this.handleSubmit}
          selectPhoto={this.selectPhoto}
          title={this.state.title}
          body={this.state.body}
          imageName={this.state.imageName}
          handleChangeBody={this.handleChangeBody}
          handleChangeTitle={this.handleChangeTitle}
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
