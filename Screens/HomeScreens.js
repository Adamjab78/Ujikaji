import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header/>

      <Body/>

      <Footer />
    </View>
  );
}
