import React from "react";
import { Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const mycolor = colors.iconColor;
  const currentTheme = useSelector(state => {
    return state.myDarkMode;
  });
  return (
    <View
      style={{
        height: 40,
        backgroundColor: colors.headerColor,
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
        <MaterialIcons
          name="account-circle"
          size={32}
          color={mycolor}
          onPress={() => dispatch({ type: "change_theme", payload: !currentTheme })}
        />
      </View>
    </View>
  );
};

export default Header;
