import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './src/navigator/MainStackNavigator';
import store from './src/store/store';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

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
