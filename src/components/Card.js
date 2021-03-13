import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ flexDirection: "row", margin: 5 }}>
        <MaterialIcons name="account-circle" size={40} color="#212121" />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ fontSize: 20, width: Dimensions.get("screen").width - 50 }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            This is a background image from unsplash that i found by searching in search bar
          </Text>
          <Text>This is a background</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
