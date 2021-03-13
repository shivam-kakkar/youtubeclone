import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const MiniCard = () => {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        }}
        style={{ width: "45%", height: 100 }}
      />
      <View style={{ paddingLeft: 7 }}>
        <Text
          style={{ fontSize: 17, width: Dimensions.get("screen").width / 2 }}
          ellipsizeMode="tail"
          numberOfLines={3}
        >
          This is a background image from unsplash that i found by searching in search bar
        </Text>
        <Text style={{ fontSize: 12 }}>This is a background</Text>
      </View>
    </View>
  );
};

export default MiniCard;
