import React from "react";
import AndroidPlateScanner from "./screens/AndroidPlateScanner";
import Welcome from "./screens/Welcome";
import Profile from "./screens/Profile";
import NewsFeed from "./screens/NewsFeed";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "Welcome",
      loggedIn: false
    };
  }

  changeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    {
      switch (this.state.index) {
        case "AndroidPlateScanner":
          return <AndroidPlateScanner changeIndex={this.changeIndex} />;
        case "Welcome":
          return <Welcome changeIndex={this.changeIndex} />;
        case "Profile":
          return <Profile changeIndex={this.changeIndex} />;
        case "NewsFeed":
          return <NewsFeed changeIndex={this.changeIndex} />;
      }
    }
  }
}
