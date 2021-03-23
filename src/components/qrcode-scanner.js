import React, { useState, useEffect } from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/core';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrcodeScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('Item Page', { barcode: data})
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        {hasPermission === null ? (
          <Text>Requesting for camera permission</Text>
        ) : hasPermission === false ? (
          <Text style={{ color: '#fff' }}>
            Camera permission is not granted
          </Text>
        ) : (
          <View
            style={{
              backgroundColor: 'red',
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              alignItems: "center",
              justifyContent: "center"
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{
                flex: 1,
                height: '50%',
                width: '100%',
              }}
            />
          </View>
        )}
        <StatusBar hidden />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});