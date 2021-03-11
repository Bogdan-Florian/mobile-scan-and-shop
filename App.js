import { StatusBar } from 'expo-status-bar';
import MainStackNavigator from './src/navigator/MainStackNavigator'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <MainStackNavigator/>
      )
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
