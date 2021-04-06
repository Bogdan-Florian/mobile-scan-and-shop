import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Orders from './Orders';

const BASE_URL = 'http://138.68.166.198';

function OrdersScreen() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [orders, setOrders] = useState(null);
    const navigation = useNavigation();
    useEffect(() => {
        loadOrders();
    }, []);

    async function loadOrders() {
        try {
            const response = await getOrders();
            console.log(response)
            const result = await response.json();
            if (response.ok) {
                console.log(result.data)
                setOrders(result.data);
            } else {
                setErrorMessage(result);
                console.log(errorMessage)
            }
        } catch (err) {
            setErrorMessage(err.message);
        }

    }

    async function getOrders() {
        const itemUrl = `${BASE_URL}/orders`;
        const token = await AsyncStorage.getItem('userToken')
        console.log(itemUrl, token)
        return await fetch(itemUrl,
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Authorization': token
                },
            });
    }

    return (
        <>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <View name={"TopBar"}
                    style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#007aff' }}>
                    <AntDesign.Button name="bars" size={35} onPress={() => {
                        navigation.openDrawer()
                    }} />
                    <Text style={{ flexGrow: 1, textAlign: 'center', alignSelf: 'center' }}>
                        Application name
                        </Text>
                </View>
            </View>

            <View name="OrdersList" style={{ flex: 6, backgroundColor: 'red' }}>

                {orders === null ? <Text>Condition True</Text> :
                    (
                        <ScrollView>

                            <Orders orders={orders}/>

                        </ScrollView>
                    )
                }
            </View>
        </>
    )
}

export default OrdersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    }
});