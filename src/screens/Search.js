import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";

const SearchScreen = () => {
  const [value, setValue] = useState("");
  const [miniCardData, setMiniCardData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAfNbNTkw9oES8fzZUtFSbrjWaiTIqGdVc`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setMiniCardData(data.items);
      })
      .catch();
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        <Ionicons name="md-arrow-back" size={32} />
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Search YouTube"
        />
        <Ionicons name="md-send" size={32} onPress={() => fetchData()} />
      </View>
      {loading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" /> : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
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

export default SearchScreen;
