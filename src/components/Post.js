/* eslint-disable react-native/no-raw-text */
import React from "react";
import { Paragraph, Title, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import { serverUrl } from "../config/constants";

class Post extends React.Component {
  render() {
    const { body, title, picture, user } = this.props;
    console.log(`image url: ${serverUrl}${picture}`);

    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: `${serverUrl}${picture}` }} />
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
