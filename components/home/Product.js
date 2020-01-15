import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const Product = () => {
  const users = [
    {
      name: "football",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMutZREFvMRCNwoltW-g5d7rVW1YJLeGq8iwUoVOPWH8kCxNb2&s"
    }
  ];
  return (
    <Container>
      <Image
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMutZREFvMRCNwoltW-g5d7rVW1YJLeGq8iwUoVOPWH8kCxNb2&s"
        }}
      />
      {users.map((u, i) => {
        return (
          <CardContainer key={i}>
            <Image source={{ uri: u.avatar }} />
            <Text>{u.name}</Text>
          </CardContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
`;

const CardContainer = styled.View`
  width: 100%;
  height: 40%;
`;

export default Product;
