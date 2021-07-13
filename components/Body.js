import { StatusBar } from "expo-status-bar";
import React  from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Body = () => {
  return (

      <View style={{ flex: 8 }}>
       <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; PROFILE</Text>
        <View style={{ backgroundColor: "ghostwhite", alignItems: "center",}}>
        &nbsp; &nbsp;
        <Text style={{fontSize: 12, color: "dimgray" }}>You have not entered your profile yet.</Text>
        <Text style={{fontSize: 12, color: "dimgray" }}>Click button to start.</Text>
        &nbsp; &nbsp;
        <Text style={{fontSize: 11, color: "white", backgroundColor: "orange" }}>&nbsp; Enter Profile&nbsp; </Text>
      </View>
      
      </View>
        <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; SHEDULE</Text>
        <View style={{ backgroundColor: "ghostwhite", alignItems: "center",}}>
        &nbsp; &nbsp;
        <Text style={{fontSize: 12, color: "dimgray" }}>You have not entered your profile yet.</Text>
        <Text style={{fontSize: 12, color: "dimgray" }}>Click button to start.</Text>
        &nbsp; &nbsp;
        <Text style={{fontSize: 11, color: "white", backgroundColor: "orange" }}> &nbsp; Create Schedule &nbsp;</Text>
        </View>
        </View>
         
      <View style={{flex: 1, backgroundColor: "ghostwhite", alignItems: "left",}}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "dodgerblue" }}>&nbsp; &nbsp; NEWS</Text>
      </View>
        
    </View>
  );
}
export default Body;