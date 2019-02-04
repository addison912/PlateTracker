/* eslint-disable react-native/no-raw-text */
import React from "react";
import { Paragraph, Title, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import { serverUrl } from "../config/constants";

class Post extends React.Component {
  state = {
    picture: require("../assets/images/loading.gif"),
    loading: true
  };

  componentDidMount() {
    this.setState({
      picture: { uri: `${serverUrl}${this.props.picture}` },
      loading: false
    });
  }
  render() {
    const { body, title } = this.props;

    return (
      <Card style={styles.card}>
        <Card.Cover source={this.state.picture} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{body}</Paragraph>
        </Card.Content>
      </Card>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  card: {
    marginBottom: 8
  }
});
