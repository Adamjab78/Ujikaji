import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "ghostwhite"}}></View>
      <View style={{flex: 2, backgroundColor: "lightgrey",justifyContent: "center", alignItems: "center",}}>
        <Text style={{fontSize: 24, fontWeight: "bold", color: "white" }}>HOME</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "ghostwhite",justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="face-profile" size={32} color="grey"></MaterialCommunityIcons>
      </View>
    </View>
  );
};
export default Header;
