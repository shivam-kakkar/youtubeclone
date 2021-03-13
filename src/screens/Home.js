import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const cardData = useSelector(state => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
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
      {/* <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView> */}
    </View>
  );
};

export default HomeScreen;
