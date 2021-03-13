import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Subscriptions = () => {
  const cardData = useSelector(state => {
    return state.cardData;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1, textAlign: "center" }}>
        Trending Videos
      </Text>
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
};

export default Subscriptions;
