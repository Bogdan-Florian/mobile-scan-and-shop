// src/screens/qrcodeScanner.js
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import QrcodeScanner from '../components/qrcode-scanner';
import itemPage from './item_page';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

const QrcodeScannerStack = createStackNavigator();

function QrcodeScreen(){
    return (
      <View>
        <QrcodeScanner> </QrcodeScanner>
      </View>
    );
}

const QrcodeStackScreen = () => (
  <QrcodeScannerStack.Navigator>
    <QrcodeScannerStack.Screen name="QrcodeScreen" component={QrcodeScreen} />
    <QrcodeScannerStack.Screen name="Item Page" component={itemPage}  options={{
          headerRight: () => (
            <ShoppingCartIcon />
          ),
        }}/>
  </QrcodeScannerStack.Navigator>
);

export default QrcodeStackScreen;
