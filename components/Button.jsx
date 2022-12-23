import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Button = ({ children, color }) => {
  return (
    <ButtonWrapper color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  color: "#2a86ff",
};
const ButtonText = styled.Text`
  font-size: 22px;
  padding: 15px 0;
  color: white;
  font-weight: 900;
`;

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => props.color};
`;

export default Button;
