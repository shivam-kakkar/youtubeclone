import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "./src/screens/Search";
import VideoPlayer from "./src/screens/VideoPlayer";
import RootHome from "./src/components/RootHome";
import store from "./src/store";
import { Provider, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "white",
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red",
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const Navigation = () => {
  const currentTheme = useSelector(state => {
    return state.myDarkMode;
  });
  return (
    <NavigationContainer theme={currentTheme ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoplayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
