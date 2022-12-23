import React from "react";
import { View, Image, Text, TouchableOpacity, onPress } from "react-native";
import styled from "styled-components/native";
import Badge from "./Badge";
const Appoinment = ({ item, navigation }) => {
  const { user, diagnosis, active, time } = item;
  const loadScene = () => {
    navigation.navigate("Patient", item);
  };
  return (
    <GroupItem onPress={loadScene}>
      {user.avatar ? (
        <Avatar
          source={{
            uri: user.avatar,
          }}
        />
      ) : (
        <LetterWrapper>
          <Letter>{user.fullName[0]}</Letter>
        </LetterWrapper>
      )}

      <View style={{ flex: 1 }}>
        <FullName>{user.fullName}</FullName>
        <Diagnos>{diagnosis}</Diagnos>
      </View>
      <Badge active={active} width={70}>
        {time}
      </Badge>
    </GroupItem>
  );
};
const Letter = styled.Text`
  font-size: 45px;
  color: #cf93f1dd;
`;
const LetterWrapper = styled.View`
  background: #dad5f8;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Diagnos = styled.Text`
  font-size: 16px;
  color: gray;
  margin-top: 5px;
`;
const FullName = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const Avatar = styled.Image`
  border-radius: 50px;
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;
const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: gray;
`;

export default Appoinment;
