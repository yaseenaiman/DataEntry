import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsNavigator } from "./settings.navigator";
import { colors } from "../../infrastructure/theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  المطاعم: "md-restaurant",
  الموقع: "md-map",
  الاعدادات: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    tabBarLabelStyle: {
      fontFamily: "Changa_500Medium",
    },
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          initialRouteName="المطاعم"
          screenOptions={createScreenOptions}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="الاعدادات"
            component={SettingsNavigator}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="الموقع"
            component={MapScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="المطاعم"
            component={RestaurantsNavigator}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
