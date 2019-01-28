import React from "react";
import AndroidPlateScanner from "./screens/AndroidPlateScanner";
import Welcome from "./screens/Welcome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      loggedIn: false
    };
  }

  handleOpenScanner = () => {
    console.log("pressed plte•trk");
    this.setState({
      index: 1
    });
  };

  render() {
    {
      return this.state.index === 1 ? (
        <AndroidPlateScanner />
      ) : (
        <Welcome handleOpenScanner={this.handleOpenScanner} />
      );
    }
  }
}
