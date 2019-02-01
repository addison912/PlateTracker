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
      modal: false,
      jwt: ""
    };
  }

  newJWT(jwt) {
    this.setState({
      jwt: jwt
    });
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
              jwt={this.state.jwt}
            />
          );
        case "Welcome":
          return (
            <Welcome
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
              jwt={this.state.jwt}
            />
          );
        case "Profile":
          return (
            <Profile
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
              jwt={this.state.jwt}
            />
          );
        case "NewsFeed":
          return (
            <NewsFeed
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
              jwt={this.state.jwt}
            />
          );
      }
    }
  }
}
