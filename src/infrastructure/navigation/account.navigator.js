import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      options={{ presentation: "modal", animationTypeForReplace: "push" }}
      name="Main"
      component={AccountScreen}
    />
    <Stack.Screen
      options={{ presentation: "modal", animationTypeForReplace: "push" }}
      name="Login"
      component={LoginScreen}
    />
  </Stack.Navigator>
);
