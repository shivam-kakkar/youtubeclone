import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const PopularVideosList = () => {
  const cardData = useSelector(state => {
    return state.popularVideos;
  });

  return (
    <FlatList
      data={cardData}
      renderItem={({ item }) => {
        return (
          <Card videoId={item.id} title={item.snippet.title} channel={item.snippet.channelTitle} />
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default PopularVideosList;
