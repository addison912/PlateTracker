/* eslint-disable react-native/no-color-literals */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import PlateTrackerAppBar from "../components/PlateTrackerAppBar";

class NewsFeed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.plate}>
          <View style={styles.plateTextContainer}>
            <Text style={styles.plateText}>News Feed</Text>
          </View>
        </View>
        <Button />
        <PlateTrackerAppBar changeIndex={this.props.changeIndex} />
      </View>
    );
  }
}

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start"
  },
  plate: {
    alignItems: "center",
    backgroundColor: "#020202",
    borderRadius: 6,
    height: 100,
    justifyContent: "center",
    marginTop: 12,
    width: 332
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
  }
});
