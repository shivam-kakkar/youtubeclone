import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
