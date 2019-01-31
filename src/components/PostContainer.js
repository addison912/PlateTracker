/* eslint-disable react-native/no-raw-text */
import React from "react";

import { StyleSheet, ScrollView } from "react-native";
import Post from "./Post";

class PostContainer extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    );
  }
}

export default PostContainer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 4
  }
});
