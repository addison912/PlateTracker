import * as React from "react";
import { ScrollView, View, Image, Dimensions, StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";

type State = {
  index: number,
  routes: Array<{
    key: string,
    title: string,
    icon: string,
    color: string
  }>
};

export default class ButtomNavigationExample extends React.Component<
  {},
  State
> {
  static title = "Bottom Navigation";

  state = {
    index: 0,
    routes: [
      { key: "album", title: "Album", icon: "photo-album", color: "#6200ee" },
      {
        key: "library",
        title: "Library",
        icon: "inbox",
        color: "#2962ff"
      },
      {
        key: "favorites",
        title: "Favorites",
        icon: "favorite",
        color: "#00796b"
      },
      {
        key: "purchased",
        title: "Purchased",
        icon: "shop",
        color: "#c51162"
      }
    ]
  };

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={index => this.setState({ index })}
        renderScene={BottomNavigation.SceneMap({
          album: PhotoGallery,
          library: PhotoGallery,
          favorites: PhotoGallery,
          purchased: PhotoGallery
        })}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4
  },
  item: {
    height: Dimensions.get("window").width / 2,
    width: "50%",
    padding: 4
  },
  photo: {
    flex: 1,
    resizeMode: "cover"
  }
});
