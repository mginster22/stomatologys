import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styled from "styled-components";

const getColor = ({ active, color }) => {
  const colors = {
    green: {
      background: "rgba(132,210,105,0.21)",
      color: "#61BB42",
    },
    active: {
      background: "#2a86FF",
      color: "white",
    },
    default: {
      background: "#E9F5FF",
      color: "#4294ff",
    },
  };
  let result;
  if (active) {
    result = colors.active;
  } else if (color && colors[color]) {
    result = colors[color];
  } else {
    result = colors.default;
  }
  return result;
};
const Badge = ({ active, children, color, width }) => {
  return (
    <GroupDate active={active} style={{ width: width }} color={color}>
      <Date active={active} color={color}>
        {children}
      </Date>
    </GroupDate>
  );
};

Badge.defaultProps = {
  color: "#2a86ff",
};

const Date = styled.Text`
  color: ${(props) => getColor(props).color};
  text-align: center;
  line-height: 22px;
  font-size: 16px;
  font-weight: 900;
`;
const GroupDate = styled.View`
  background: ${(props) => getColor(props).background};
  border-radius: 19px;
  height: 36px;
  padding: 5px;
`;

export default Badge;
