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
      modal: false
    };
  }

  changeIndex = index => {
    this.setState({
      index
    });
  };

  changeModal = modal => {
    this.setState({ modal });
  };

  render() {
    {
      switch (this.state.index) {
        case "AndroidPlateScanner":
          return (
            <AndroidPlateScanner
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
            />
          );
        case "Welcome":
          return (
            <Welcome
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
            />
          );
        case "Profile":
          return (
            <Profile
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
            />
          );
        case "NewsFeed":
          return (
            <NewsFeed
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
            />
          );
      }
    }
  }
}
