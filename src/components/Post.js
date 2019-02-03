/* eslint-disable react-native/no-raw-text */
import React from "react";
import { Paragraph, Title, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import { image } from "../assets/images/base64";

class Post extends React.Component {
  render() {
    return (
      <Card style={styles.card}>
        <Card.Cover source={image} />
        <Card.Content>
          <Title>Stolen Motorcycle</Title>
          <Paragraph>
            The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn,
            originally being a ship named the S.S. Cactus. The second part of
            the ship can only be accessed by using Dive and contains the
            Scanner.
          </Paragraph>
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
