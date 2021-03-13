import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [value, setValue] = useState("");
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
          onChange={text => setValue(text)}
        />
        <Ionicons name="md-send" size={32} />
      </View>
    </View>
  );
};

export default SearchScreen;
