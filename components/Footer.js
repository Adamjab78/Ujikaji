import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "chocolate" }}></View>
        <View style={{ flex: 1, backgroundColor: "darkviolet" }}></View>
      </View>
    );
  };

  export default Footer;