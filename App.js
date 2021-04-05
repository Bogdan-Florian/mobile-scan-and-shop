import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import { Provider } from 'react-redux';
import MainStackNavigator from './src/navigator/MainStackNavigator';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import store from './src/redux/store';
import * as Font from "expo-font"
import { AppLoading} from "expo"
import {useFonts} from "expo-font";
import { Asset } from 'expo-asset';
import thisfont from './src/resources/fonts/Helvetica.ttf'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'Helvetica': require('./src/resources/fonts/Helvetica.ttf'),
      'Helvetica-Bold': require('./src/resources/fonts/Helvetica-Bold.ttf'),

    })
    this.setState({ fontLoaded: true })
  }


  componentDidMount() {
    this.loadFonts();
  }


  render() {
    return(
      <Provider store={store}>
      <MainStackNavigator />
      </Provider>
    )
  }
}
