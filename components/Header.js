import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>
      <View style={{ flex: 2, backgroundColor: "dimgrey" }}></View>
      <View style={{ flex: 1, backgroundColor: "goldenrod" }}></View>
    </View>
  );
};
 export default Header;