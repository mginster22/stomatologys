import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import styled from "styled-components/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Swipe = ({ children }) => {
  return (
    <Swipeable
      renderRightActions={() => {
        return (
          <SwapView>
            <SwipeDelete>
              <AntDesign name="delete" size={24} color="black" />
            </SwipeDelete>
            <SwipeUpdate>
              <Entypo name="pencil" size={24} color="black" />
            </SwipeUpdate>
          </SwapView>
        );
      }}
    >
      {children}
    </Swipeable>
  );
};

const SwipeUpdate = styled.Text``;
const SwipeDelete = styled.Text``;
const SwapView = styled.View`
  flex-direction: row;
  margin-top: 22px;
`;

export default Swipe;
