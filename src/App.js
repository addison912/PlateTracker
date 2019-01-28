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

  changeIndexScanner = e => {
    this.setState({
      index: "AndroidPlateScanner"
    });
  };

  changeIndexProfile = e => {
    this.setState({
      index: "Profile"
    });
  };

  changeIndexNewsFeed = e => {
    this.setState({
      index: "NewsFeed"
    });
  };

  render() {
    {
      switch (this.state.index) {
        case "AndroidPlateScanner":
          return (
            <AndroidPlateScanner
              changeIndexProfile={this.changeIndexProfile}
              changeIndexNewsFeed={this.changeIndexNewsFeed}
            />
          );
        case "Welcome":
          return (
            <Welcome
              changeIndexScanner={this.changeIndexScanner}
              changeIndexProfile={this.changeIndexProfile}
              changeIndexNewsFeed={this.changeIndexNewsFeed}
            />
          );
        case "Profile":
          return (
            <Profile
              changeIndexScanner={this.changeIndexScanner}
              changeIndexNewsFeed={this.changeIndexNewsFeed}
            />
          );
        case "NewsFeed":
          return (
            <NewsFeed
              changeIndexProfile={this.changeIndexProfile}
              changeIndexScanner={this.changeIndexScanner}
            />
          );
      }
    }
  }
}
