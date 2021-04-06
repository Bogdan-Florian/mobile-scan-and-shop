import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Text,
  View,
  StatusBar,
  StyleSheet,
  Alert
} from 'react-native';
import { Camera } from 'expo-camera';

import * as Permissions from 'expo-permissions';
import { useNavigation, useRoute } from '@react-navigation/core';
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

  let wait = ms => new Promise(resolve => setTimeout(resolve, ms));


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    (async () => {
      await wait(3500);
      console.log("set scanner to working state again")
      setScanned(false)
    })()


    if (type === 256 || type === 'org.iso.QRCode') {
      {
        console.log('qrcode')
        navigation.navigate('HomeDrawer', {
          screen: 'HomeStack',
          params: {
            screen: 'Home',
            params: {
              qrcode: data
            }
          }
        }
        )
      }
    }
    else {
      console.log('barcode')
      navigation.navigate('Item Page', {
        barcode: data
      });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <>

      {hasPermission === null ? (
      <View name={"Permissions container"} style={styles.container}>

        <Text>Requesting for camera permission</Text>
      ) : hasPermission === false ? (
        <Text style={{ color: '#ce0808' }}>
          Camera permission is not granted
        </Text>

      </View>
      )

          : (
              <View style={{ flex: 1, backgroundColor: '#fff', contentPadding: 0, padding: 0, paddingHorizontal: 0, paddingLeft: 0, paddingStart: 0, marginHorizontal: 0, marginLeft: 0, marginStart: 0 }}>
                <Camera
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={StyleSheet.absoluteFillObject}
                />
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity:0.5}}
                >
                </View>
                <View
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      alignItems: 'center',
                    }}
                >
                  <Text style={{ color: '#fff', fontSize: 18 }}>
                   Scan a shop QR-code
                  </Text>
                  <Text style={{ color: '#fff', fontSize: 18 }}>
                    or a product barcode to get started
                  </Text>
                </View>
              </View>

        // <View style={{display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'center',
        //   backgroundColor:'red',
        //   }}>
        //
        //   <Camera
        //       onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        //       style={{
        //         display:'flex',
        //         flexGrow:1,
        //         width: Dimensions.get('screen').width,
        //         height: Dimensions.get('screen').height}}
        //   />
        //
        //   {/*<BarCodeScanner*/}
        //   {/*  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}*/}
        //   {/*  style={{*/}
        //
        //   {/*  }}*/}
        //   {/*/>*/}
        //
        // </View>

      )}
      </>


  );
}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#deb0b0',
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
