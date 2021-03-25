import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, StatusBar,
} from 'react-native';
import { useRoute } from '@react-navigation/core';
import Itempage from '../components/Itempage';

const BASE_URL = 'http://138.68.166.198/';

export default function item_page() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const route = useRoute();
  const { barcode } = route.params;
  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      const response = await getItem(barcode);
      const result = await response.json();

      if (response.ok) {
        setItemDetails(result);
      } else {
        setErrorMessage(result);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  }
  if (itemDetails) {
    return (
      <View>
        <View>
          <Itempage itemDetails={itemDetails} />
        </View>
        <StatusBar />
      </View>
    );
  }
  return (
    <View>
      <Text>{errorMessage}</Text>
      <StatusBar />
    </View>
  );
}

async function getItem(barcode) {
  const itemUrl = `${BASE_URL}item/${barcode}`;
  return await fetch(itemUrl,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
}
