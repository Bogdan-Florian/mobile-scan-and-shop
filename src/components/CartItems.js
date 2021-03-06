import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {useNavigation} from "@react-navigation/core";

const BASE_URL = 'http://138.68.166.198';

function CartItems(props) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [response, setResponse] = useState(null);
    const navigation = useNavigation()
    async function load() {
        try {
            const response_server = await createOrder(props.cartItems);
            const result = await response_server.json();
            if (response_server.ok) {
                setResponse(result);
                console.log('helllo')
                props.cartItems = []
            } else {
                setErrorMessage(result);
            }
        } catch (err) {
            setErrorMessage(err.message);
        }
    }
    async function createOrder(cart) {
        const url = `${BASE_URL}/orders`
        const username = await AsyncStorage.getItem('username')
        const token = await AsyncStorage.getItem('userToken')
        let cart_server = cart.map((item) => {
            return { id: item.id, description: item.description, qty: item.qty }
        })
        const basket = cart_server
        const status = 'active'
        return await fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status, basket })
            });
    }

    function renderProducts(products) {
        return products.map((item, index) => {
            return (
                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '007aff', marginTop: '5%', marginLeft: '1%', marginRight: '1%' }} key={index}>
                    <Image source={{ uri: `${item.product_image}` }} style={{ display: 'flex', width: 100, height: 100, resizeMode: 'contain' }} />

                    <View style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', }}>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>??{item.price}</Text>
                        <Text style={styles.itemQty}>Qty: {item.qty}</Text>
                    </View>
                    <View title={"Button"} style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ marginTop: '50%' }}
                            onPress={() => props.adjustQty(item.id, item.qty + 1)}>
                            <AntDesign name="plus" size={24} color="#4003DA" />

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ marginTop: '50%' }}
                            onPress={() => (item.qty - 1) !== 0 ? props.adjustQty(item.id, item.qty - 1) : props.removeItem(item)} >
                            <AntDesign name="minus" size={24} color="#4003DA" />

                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: '50%', fontFamily: 'Helvetica', }}
                            onPress={() => props.removeItem(item)} title={'Remove from cart'}>
                            <Feather name="trash-2" size={24} color="#4003DA" />
                        </TouchableOpacity>
                    </View>



                </View>

                // <View key={index} style={{ padding: 20 }}>
                //     <Text>{item.description}</Text>
                //     <Text>{item.price}</Text>

                // </View>

            )
        })
    }

    function renderButton(products) {
        let total = 0
        products.map((item) => {
            total = total + item.price * item.qty
        })
        return (
            <View style={{ padding: 20 }}>
                <TouchableOpacity style={styles.finishOrderView} onPress={

                    () => navigation.navigate('HomeDrawer',{
                        screen: 'HomeStack',
                        params: {
                            screen: 'Payment'
                        }
                })}>



                    <Text style={styles.amount}>
                        Amount total: ??{total.toFixed(2)}

                    </Text>

                    <Text style={styles.finishOrderText}>
                        Tap to finish order
                    </Text>


                </TouchableOpacity>

            </View>

        )
    }

    return (
        <View style={styles.container}>
            {renderProducts(props.products)}
            {renderButton(props.products)}
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
        adjustQty: (product_id, value) => dispatch({ type: 'ADJUST_QTY', payload: { id: product_id, qty: value } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);

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
        color: 'rgb(64,3,218)',
        alignSelf:'center'

    },

    amount:{
        fontFamily: 'Helvetica',
        alignSelf: 'center',
        fontSize:25,

    }
    // <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Montserrat</Text>


});
