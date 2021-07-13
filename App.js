import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Saya Adam</Text>
      <Text>Saya Budak baru belajar</Text>
      <Text>Alhamdulillah Berjaya Akhirnya</Text>
      <Text>................................</Text>
      <Text>ok hari ni dah faham sikit</Text>
      <Text>                          </Text>
      <Text>Hooraaaa...</Text>
      <Text>Hoorayyy...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
