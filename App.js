import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './src/navigator/MainStackNavigator';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import store from './src/redux/store';

export default class App extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (
      <Provider store={store}>
      <MainStackNavigator />
      </Provider>
    );
  }
}
