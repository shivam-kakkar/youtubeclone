import React from "react";
import { Text, View } from "react-native";

const LittleCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 50,
        width: 160,
        borderRadius: 4,
        marginTop: 10,
      }}
    >
      <Text style={{ textAlign: "center", color: "white", fontSize: 22, marginTop: 5 }}>
        {name}
      </Text>
    </View>
  );
};

export default LittleCard;
