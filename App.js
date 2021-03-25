import React from 'react';
import MainStackNavigator from './src/navigator/MainStackNavigator';


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
