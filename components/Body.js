import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons }  from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Body = () => {
  return (

      <View style={{ flex: 8 }}>
       <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{fontSize: 17, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; PROFILE</Text>
      </View>
       
        <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; SHEDULE</Text>
      </View>
         
      <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; NEWS</Text>
      </View>
        
         
       </View>
  );
}
export default Body;