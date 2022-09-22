import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import AddUserScreen from "../../../DataEntry/components/AddUserScreen";
import UserDetailScreen from "../../../DataEntry/components/UserDetailScreen";
import UserScreen from "../../../DataEntry/components/UserScreen";

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="اضافة المطاعم"
        component={AddUserScreen}
        options={{ presentation: "modal", animationTypeForReplace: "push" }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ presentation: "modal", animationTypeForReplace: "push" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ presentation: "modal", animationTypeForReplace: "push" }}
      />
    </Stack.Navigator>
  );
}

export const UserScreenmainScreen = ({ navigation }) => {
  return <MyStack />;
};
