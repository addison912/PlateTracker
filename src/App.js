import React from "react";
import AndroidPlateScanner from "./screens/AndroidPlateScanner";
import Welcome from "./screens/Welcome";
import Profile from "./screens/Profile";
import NewsFeed from "./screens/NewsFeed";
import deviceStorage from "./services/deviceStorage";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "Welcome",
      modal: false,
      jwt: null,
      user: null,
      loading: false,
      verified: false
    };
  }

  verifyLogin = () => {
    deviceStorage.loadJWT;
    if (!this.state.jwt) {
      console.log("user is not logged in");
      this.setState({ verified: false });
    } else {
      console.log(this.state.jwt);
      axios({
        method: "POST",
        url: "/verify",
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", this.state.jwt);
        }
      })
        .done(function(response) {
          console.log(response);
          this.setState({ verified: true });
        })
        .fail(function(err) {
          console.log(err);
        });
    }
  };

  componentDidMount() {
    this.verifyLogin();
    if (this.state.verified === true) {
      this.setState({ index: "Profile" });
    }
  }

  newJWT = (jwt, user) => {
    this.setState({
      jwt,
      user,
      verified: true
    });
  };

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
              verified={this.state.verified}
              newJWT={this.newJWT}
            />
          );
        case "Welcome":
          return (
            <Welcome
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
              verified={this.state.verified}
              newJWT={this.newJWT}
              verifyLogin={this.verifyLogin}
            />
          );
        case "Profile":
          return (
            <Profile
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
              verified={this.state.verified}
              newJWT={this.newJWT}
              verifyLogin={this.verifyLogin}
            />
          );
        case "NewsFeed":
          return (
            <NewsFeed
              changeIndex={this.changeIndex}
              modal={this.state.modal}
              changeModal={this.changeModal}
              verified={this.state.verified}
              newJWT={this.newJWT}
              verifyLogin={this.verifyLogin}
            />
          );
      }
    }
  }
}
