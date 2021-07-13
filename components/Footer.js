import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons }  from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="home" size={32} color="black"></Ionicons>
      </View>
    
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="face-profile" size={32} color="black"></MaterialCommunityIcons>
      </View>
      </View>
    );
  };

  export default Footer;