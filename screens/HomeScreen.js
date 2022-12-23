import React from "react";
import { View, Image, Text, SectionList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Appoinment from "../components/Appoinment";
import SectionTitle from "../components/SectionTitle";
import { Ionicons } from "@expo/vector-icons";
import Swipe from "../components/Swipe";

const HomeScreen = ({ navigation, data, isLoading, loadData }) => {
  const loadScene = () => {
    navigation.navigate("AddPatient");
  };
  return (
    <Container>
      {data && (
        <SectionList
          onRefresh={loadData}
          refreshing={isLoading}
          sections={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Swipe>
              <Appoinment navigation={navigation} item={item} />
            </Swipe>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
        />
      )}
      <PlusButton
        style={{
          shadowColor: "#2A86FF",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,

          elevation: 19,
        }}
        onPress={loadScene}
      >
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
};

const PlusButton = styled.TouchableOpacity`
  width: 74px;
  height: 74px;
  background: #2a86ff;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  position: absolute;
  bottom: 15px;
  right: 20px;
`;

const Container = styled.View`
  flex: 1;
  /* margin-top: 50px; */
  padding: 20px 0;
  background: white;
`;

export default HomeScreen;
