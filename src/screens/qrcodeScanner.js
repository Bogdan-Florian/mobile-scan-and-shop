// src/screens/qrcodeScanner.js
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import QrcodeScanner from '../components/qrcode-scanner';
import itemPage from './item_page';

const QrcodeScannerStack = createStackNavigator();

class ScanScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <QrcodeScanner> </QrcodeScanner>
      </View>
    );
  }
}

function QrcodeScreen() {
  const navigation = useNavigation();
  return <ScanScreen navigation={navigation} />;
}

const QrcodeStackScreen = () => (
  <QrcodeScannerStack.Navigator>
    <QrcodeScannerStack.Screen name="QrcodeScreen" component={QrcodeScreen} />
    <QrcodeScannerStack.Screen name="Item Page" component={itemPage} />
  </QrcodeScannerStack.Navigator>
);

export default QrcodeStackScreen;
