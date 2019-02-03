import { AsyncStorage } from "react-native";

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem("id_token");
      const user = await AsyncStorage.getItem("currentUser");
      if (value !== null) {
        console.log(user);
        this.setState({
          jwt: value,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
        console.log("user not found");
      }
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async deleteJWT() {
    try {
      await AsyncStorage.removeItem("id_token").then(() => {
        this.setState({
          jwt: "",
          currentUser: {}
        });
      });
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }
};

export default deviceStorage;
