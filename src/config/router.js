import React from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

// routes
import AndroidPlateScanner from "../screens/AndroidPlateScanner";
import NewsFeed from "../screens/NewsFeed";
import PostDetails from "../screens/PostDetails";
import Profile from "../screens/Profile";
import Welcome from "../screens/Welcome";

// tabs
export const Tabs = TabNavigator({
  Profile: {
    screen: Profile
  },
  AndroidPlateScanner: {
    screen: AndroidPlateScanner
  },
  NewsFeed: {
    screen: NewsFeed
  }
});
