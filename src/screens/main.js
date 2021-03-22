// src/screens/main.js
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Home from '../components/home';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Home> </Home>
      </View>
    );
  }
}

export default function MainScreen() {
  const navigation = useNavigation();
  return <Main navigation={navigation} />;
}
