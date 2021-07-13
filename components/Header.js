import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
     <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "lightgray "}}></View>
      <View style={{flex: 2, backgroundColor: "lightgray ",justifyContent: "center", alignItems: "center",}}>
        <Text style={{fontSize: 20, fontWeight: "bold", color: "dimgray" }}>HOME</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "lightgray ",justifyContent: "center", alignItems: "center" }}>
        <FontAwesome name={"user-circle-o"} size={26} color={"dimgray"}></FontAwesome>
      </View>
    </View>
  );
};
export default Header;
