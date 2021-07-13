import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header/>

      <Body/>

      <Footer />
    </View>
  );
}
