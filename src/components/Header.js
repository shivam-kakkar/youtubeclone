import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const mycolor = "#212121";
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 40,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
        marginTop: Constant.statusBarHeight,
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <AntDesign style={{ marginLeft: 20 }} name="youtube" size={32} color="red" />
        <Text style={{ fontSize: 22, marginLeft: 5, fontWeight: "bold", color: mycolor }}>
          YouTube
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", width: 150, margin: 4 }}>
        <Ionicons name="md-videocam" size={32} color={mycolor} />
        <Ionicons
          name="md-search"
          size={32}
          color={mycolor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons name="account-circle" size={32} color={mycolor} />
      </View>
    </View>
  );
};

export default Header;
