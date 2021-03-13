import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text>App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
