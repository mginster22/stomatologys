import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Image, Text, SectionList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import HomeScreen from "./screens/HomeScreen";
import PatientScreen from "./screens/PatientScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import AddPatientScreen from "./screens/AddPatientScreen";

export default function App() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const loadData = async () => {
    setIsloading(true);
    const { data } = await axios.get(
      "https://639c35d416d1763ab14288ea.mockapi.io/users"
    );
    setData(data);
    setIsloading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addPatient = async (patient) => {
    const { data } = await axios.post(
      "https://639c35d416d1763ab14288ea.mockapi.io/users",
      patient
    );
    setData([...data, [...data, {}]]);
  };
  const loadDatas = async () => {
    const { data } = await axios.get(
      "https://639c35d416d1763ab14288ea.mockapi.io/users"
    );
    const newData = data[0];
    setDatas([...newData]);
  };
  useEffect(() => {
    loadDatas();
  }, []);
  console.log(datas);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "Пациенты",
            headerTintColor: "#2A86FF",
            headerTitleStyle: {
              fontSize: "28px",
              fontWeight: "900",
            },
            headerTitleAlign: "left",
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8,
            },
          }}
        >
          {(props) => (
            <HomeScreen
              data={data}
              {...props}
              isLoading={isLoading}
              loadData={loadData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Patient"
          options={{
            headerBackTitleStyle: { display: "none" },
            title: "Карта пациента",
            headerTintColor: "#2A86FF",
            headerTitleStyle: {
              fontSize: "22px",
              fontWeight: "900",
            },
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8,
              backgroundColor: "white",
            },
          }}
        >
          {(props) => <PatientScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddPatient"
          options={{
            headerBackTitleStyle: { display: "none" },
            title: "Добавить пациента",
            headerTintColor: "#2A86FF",
            headerTitleStyle: {
              fontSize: "22px",
              fontWeight: "900",
            },
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8,
              backgroundColor: "white",
            },
          }}
        >
          {(props) => <AddPatientScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
