import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons }  from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const Footer = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="home" size={20} color="mediumpurple"></Ionicons>
      </View>
      <View style={{flex: 2, backgroundColor: "lightgrey",justifyContent: "bottom", alignItems: "center",}}>
        <Text style={{fontSize: 16, fontWeight: "bold", color: "white" }}>Home</Text>
      </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AntDesign name="profile" size={20} color="mediumpurple"> </AntDesign>
      </View>
      <View style={{flex: 2, backgroundColor: "lightgrey",justifyContent: "bottom", alignItems: "center",}}>
        <Text style={{fontSize: 16, fontWeight: "bold", color: "white" }}>Profile</Text>
      </View>
      </View>
    );
  };

  export default Footer;