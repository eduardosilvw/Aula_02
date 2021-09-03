import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
          <text>Deus é bom!!</text>
          <Image source={
              require("./src/assets/arrow-left.png")
              }>
          </Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header:{
    minHeight:70,
    height:30,
    backgroundColor:"#4369B0",
  },
});
