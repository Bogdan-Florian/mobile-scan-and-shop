// src/screens/qrcodeScanner.js


import React, { Component } from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import {useNavigation} from "@react-navigation/core";
import { createStackNavigator } from '@react-navigation/stack';
import QrcodeScanner from '../components/qrcode-scanner';
import item_page from './item_page';
// import { NavigationContainer } from '@react-navigation/native'; 


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


const QrcodeScannerStack = createStackNavigator();

const QrcodeStackScreen = () => {
  return(
  <QrcodeScannerStack.Navigator>
    <QrcodeScannerStack.Screen name="QrcodeScreen" component={QrcodeScreen} />
    <QrcodeScannerStack.Screen name="Item Page" component={item_page} />
  </QrcodeScannerStack.Navigator>
  );
};


export default QrcodeStackScreen;