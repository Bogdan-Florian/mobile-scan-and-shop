import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/core';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from "expo-status-bar";



function Order_Screen() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [order, setOrder] = useState(null);
    const route = useRoute();
    const { url } = route.params;
    useEffect(() => {
        loadOrder();
    }, []);

    async function loadOrder() {
        try {
            const response = await getOrder();
            const result = await response.json();
            if (response.ok) {
                setOrder(result);
            } else {
                setErrorMessage(result);
                console.log(errorMessage)
            }
        } catch (err) {
            setErrorMessage(err.message);
        }

    }

    async function getOrder() {
        const itemUrl = `${url}`;
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
    
    function renderTotal(order){
        let total = 0
        order.data.map((item) => {
            total = total + item.price * item.qty
        })
        return(
            <Text style={styles.finishOrderText}>Total Price: {total}</Text>
        )
    }

    function renderStart(order){
        return (
            <View style={styles.container}>
            <View style={{ display: 'flex', alignSelf: 'center', alignItems: 'center', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', backgroundColor: 'green' }}>
                <Text style={{ marginTop: '5%', backgroundColor: 'pink' }}>
                    {order.name}
                </Text>
                <ScrollView>
                    <View>
                        {renderProducts(order)}
                    </View>
                </ScrollView>
                <View style={styles.finishOrderView}>
                    {renderTotal(order)}
                </View>
            </View>
        </View>
        )
    }

    function renderProducts(order) {
        return order.data.map((item, index) => {
            return (
                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '007aff', marginTop: '5%', marginLeft: '1%', marginRight: '1%' }} key={index}>
                    <Image source={{ uri: `${item.product_image}` }} style={{ display: 'flex', width: 100, height: 100, resizeMode: 'contain' }} />

                    <View style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', }}>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>£{item.price}</Text>
                        <Text style={styles.itemQty}>Qty: {item.qty}</Text>
                    </View>
                </View>
            )
        })
    }

    if (order) {
        return (
            <View>{renderStart(order)}</View>
        );
      }
      return (
        <View>
          <Text>{errorMessage}</Text>
          <StatusBar />
        </View>
      );
}

export default Order_Screen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    itemDescription: {
        fontFamily: 'Helvetica',
        fontSize: 20,
    },
    itemPrice: {
        fontFamily: 'Helvetica',
        fontSize: 20,


    },
    itemQty: {
        fontFamily: 'Helvetica',


    },

    finishOrderView: {
        fontFamily: 'Helvetica-Bold',
        alignSelf: 'center'

    },

    finishOrderText: {
        fontSize: 25,
        color: 'rgb(64,3,218)'

    }
    // <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Montserrat</Text>


});
