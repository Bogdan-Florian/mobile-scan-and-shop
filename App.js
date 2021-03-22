import React from 'react';
import MainStackNavigator, {TabNavigator} from './src/navigator/MainStackNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }
  render() {
      return(
          <MainStackNavigator/>
      )





    }
}
