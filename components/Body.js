import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Body = () => {
  return (

      <View style={{ flex: 8 }}>
       <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; PROFILE</Text>
      </View>
       
        <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; SHEDULE</Text>
      </View>
         
      <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; NEWS</Text>
      </View>
        
         
       </View>
  );
}
export default Body;