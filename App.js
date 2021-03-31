import React,{useState} from 'react';
import MainStackNavigator from './src/navigator/MainStackNavigator';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

export default class App extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (
      <MainStackNavigator />
    );
  }
}
