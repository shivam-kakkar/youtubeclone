import React from "react";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Subscriptions from "../screens/Subscriptions";
import { MaterialIcons } from "@expo/vector-icons";

const RootHome = () => {
  const { colors } = useTheme();
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "explore";
          } else if (route.name === "Subscriptions") {
            iconName = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscriptions" component={Subscriptions} />
    </Tabs.Navigator>
  );
};

export default RootHome;
