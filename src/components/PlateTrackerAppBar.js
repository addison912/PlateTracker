import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

class PlateTrackerAppBar extends React.Component {
  handleProfilePress = () => {
    if (this.props.jwt) {
      this.props.changeIndex("Profile");
    }
  };

  render() {
    return (
      <Appbar style={styles.appbar}>
        <Appbar.Action
          color="#EECB13"
          icon="account-circle"
          onPress={this.handleProfilePress}
        />
        <Appbar.Action
          color="#EECB13"
          icon="camera"
          onPress={() => this.props.changeIndex("AndroidPlateScanner")}
        />
        <Appbar.Action
          color="#EECB13"
          icon="list"
          onPress={() => this.props.changeIndex("NewsFeed")}
        />
      </Appbar>
    );
  }
}
export default PlateTrackerAppBar;

const styles = StyleSheet.create({
  appbar: {
    bottom: 0,
    flex: 1,
    justifyContent: "space-evenly",
    left: 0,
    position: "absolute",
    right: 0
  }
});
