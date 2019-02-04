/* eslint-disable react-native/no-raw-text */
import React from "react";

import { StyleSheet, View } from "react-native";
import Post from "./Post";

class ProfilePostContainer extends React.Component {
  render() {
    return (
      <View style={styles.container} contentContainerStyle={styles.content}>
        {this.props.posts.map(post => {
          return (
            <Post
              key={post._id}
              title={post.title}
              picture={post.picture}
              body={post.body}
              id={post}
            />
          );
        })}
      </View>
    );
  }
}

export default ProfilePostContainer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 4
  }
});
