import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Ionicons }  from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const Footer = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 2 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="home" size={24} color="mediumpurple"></Ionicons>
      </View>
      <View style={{flex: 1,justifyContent: "bottom", alignItems: "center",}}>
        <Text style={{fontSize: 14, fontWeight: "bold", color: "dimgray" }}>Home</Text>
      </View>
      </View> 
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AntDesign name="profile" size={24} color="mediumpurple"> </AntDesign>
        </View>
        <View style={{flex: 1,justifyContent: "bottom", alignItems: "center",}}>
        <Text style={{fontSize: 14, fontWeight: "bold", color: "dimgray" }}>Profile</Text>
      </View>
      </View>
    
      </View>
    );
  };

  export default Footer;