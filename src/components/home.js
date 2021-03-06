import React, { useEffect, useState } from 'react';
import {
    View, StyleSheet, Text, ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import Products from './Products';
import { connect } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/core';
import ShoppingCartIcon from "./ShoppingCartIcon";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native'

const BASE_URL = 'http://138.68.166.198/';

function HomeScreen({ addItemToCart }) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [items, setItems] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused()

    useEffect(() => {
        try{
            const { qrcode } = route.params;
            loadItems(qrcode)
        }
        catch (e) {
            console.log("User moved to home screen without scanning qrcode | ERROR:", e)
        }
    }, [isFocused]);



    async function loadItems(qrcode) {
        try {
            const response = await getItems(qrcode);
            const result = await response.json();
            if (response.ok) {
                setItems(result.data);
            } else {
                setErrorMessage(result);
                console.log(errorMessage)
            }
        } catch (err) {
            setErrorMessage(err.message);
        }

    }

    async function getItems(qrcode) {
        const itemUrl = `${BASE_URL}stores/${qrcode}`;
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
                    <Text style={{ flexGrow: 1, textAlign: 'center', alignSelf: 'center', fontFamily:'Helvetica', fontSize:25, color:'#194492' }}>
                        Quick Shop
                        </Text>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </View>
            </View>

            <View name="ProductList" style={{ flex: 6}}>

                {items === null ? <Text style={{alignSelf:'center', justifyContent:'center'}}>{"Promotions to be displayed"}</Text> :
                    (
                        <ScrollView>

                            <Products products={items} onPress={addItemToCart} />

                        </ScrollView>
                    )
                }
            </View>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    }
});
