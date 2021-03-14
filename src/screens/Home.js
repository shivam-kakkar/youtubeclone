import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import PopularVideosList from "../components/PopularVideosList";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=IN&key=[YOUR_API_KEY]`
    )
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "HOME_VIDEOS", payload: data.items });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <PopularVideosList />
    </View>
  );
};

export default HomeScreen;
