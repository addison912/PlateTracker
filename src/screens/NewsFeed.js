/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Paragraph, Title, Card } from "react-native-paper";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";
import PostContainer from "../components/PostContainer";

class NewsFeed extends React.Component {
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
          onPress={() => this.props.changeModal("AddPost")}
        >
          Add a post
        </Button>
        <PostContainer />
        <PlateTrackerAppBar
          changeIndex={this.props.changeIndex}
          verified={this.props.verified}
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
