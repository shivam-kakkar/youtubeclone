import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import PopularVideosList from "../components/PopularVideosList";

const Subscriptions = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1, textAlign: "center" }}>
        Trending Videos
      </Text>
      <PopularVideosList />
    </View>
  );
};

export default Subscriptions;
