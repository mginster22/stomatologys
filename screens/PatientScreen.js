import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Appoinment from "../components/Appoinment";
import SectionTitle from "../components/SectionTitle";
import { Ionicons, Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import Button from "../components/Button";
import Badge from "../components/Badge";

const PatientScreen = ({ route: { params } }) => {
  const {
    user: { fullName, phone },
    diagnosis,
    date,
    time,
    price,
    dentNumber,
  } = params;
  return (
    <Container>
      <PatientDetails>
        <PatientFullName>{fullName}</PatientFullName>
        <PatientPhoneNumber>{phone}</PatientPhoneNumber>
        <PatientButtons>
          <FormullaButton>
            <Button>Форма зубов</Button>
          </FormullaButton>
          <PhoneButton>
            <Button color="#84d269">
              <Feather name="phone" size={24} color="white" />
            </Button>
          </PhoneButton>
        </PatientButtons>
      </PatientDetails>
      <Text
        style={{
          marginTop: 30,
          fontSize: 30,
          fontWeight: "900",
          padding: 10,
        }}
      >
        Приемы
      </Text>
      <PatientApoinmentElements>
        <PatientApoinmentCard>
          <MoreButton>
            <Entypo name="dots-three-vertical" size={24} color="gray" />
          </MoreButton>
          <AppointmentCardRow>
            <FontAwesome5 name="tooth" size={16} color="gray" />
            <AppointmentCardLabel>
              <AppointmentCardText>Зуб:</AppointmentCardText>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {dentNumber}
              </Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow>
            <FontAwesome5 name="notes-medical" size={16} color="gray" />
            <AppointmentCardLabel>
              <AppointmentCardText>Диагноз:</AppointmentCardText>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {diagnosis}
              </Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow style={{ justifyContent: "space-between" }}>
            <Badge width={185} active>
              {date}-{time}
            </Badge>
            <Badge color="green" width={120}>
              {price}
            </Badge>
          </AppointmentCardRow>
        </PatientApoinmentCard>
      </PatientApoinmentElements>
    </Container>
  );
};

const AppointmentCardText = styled.Text`
  margin: 0 8px;
  font-size: 18px;
`;
const AppointmentCardLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;
const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
`;

const PatientApoinmentCard = styled.View`
  shadow-color: gray;
  elevation: 0.8;
  shadow-opacity: 0.4;
  shadow-radius: 5;
  padding: 20px;
  border-radius: 10px;
  background: white;
`;

const MoreButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 15px;
`;

const PatientApoinmentElements = styled.View`
  margin-top: 20px;
  padding: 0 20px;
`;

const FormullaButton = styled.View`
  flex: 1;
`;
const PhoneButton = styled.View`
  width: 60px;
  margin-left: 10px;
`;

const PatientButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const PatientPhoneNumber = styled.Text`
  font-size: 24px;
  margin-top: 10px;
  color: gray;
`;
const PatientFullName = styled.Text`
  font-size: 34px;
  font-weight: 900;
`;

const PatientDetails = styled.View`
  background: white;
  padding: 40px 20px;
`;
const Container = styled.View`
  background: #f4f2f2;
  height: 100%;
`;

export default PatientScreen;
