import React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import LittleCard from "../components/LittleCard";
import PopularVideosList from "../components/PopularVideosList";

const Explore = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="Gaming" />
          <LittleCard name="News" />
          <LittleCard name="Films" />
          <LittleCard name="Fashion" />
        </View>
        <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1 }}>Trending Videos</Text>
        <PopularVideosList />
      </View>
    </ScrollView>
  );
};

export default Explore;
