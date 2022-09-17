import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import AddUserScreen from "./src/AddUserScreen";
import FetchData from "./src/FetchData";
import UserScreen from "./src/UserScreen";
import UserDetailScreen from "./src/UserDetailScreen";
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="اضافة المطاعم"
        component={AddUserScreen}
        options={{ title: "اضافة مطعم جديد" }}
      />
      <Stack.Screen
        name="Fetch"
        component={FetchData}
        options={{ title: "قائمه المطاعم" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Detail" }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ title: "Users List" }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
