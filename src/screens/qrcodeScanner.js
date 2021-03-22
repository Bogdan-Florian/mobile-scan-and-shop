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
import QrcodeScanner from '../components/qrcode-scanner'

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

export default function QrcodeScreen() {
    const navigation = useNavigation();
    return <ScanScreen navigation={navigation} />;
}




