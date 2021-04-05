import { useNavigation } from '@react-navigation/core';
import React, { useState, Component } from 'react';
import {
    Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground,
} from 'react-native';
export function EmptyCartPage(){
    return(
            <View style={styles.container}>


             <View style={styles.messageContainer}>


                 <Image source={require('../resources/images/emptycart.gif')} style={styles.imageGif} />

                 <Text style={styles.text}>
                     Cart is Empty!
                 </Text>

                 <Text style={styles.text}>
                    You have no items in your shopping cart.
                </Text>

            </View>


            </View>


    )


}
const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageContainer:{
        // alignSelf:'center',
        // justifyContent:'center',
        // display:'flex',
        // flexDirection: 'column'
    },
    text:{
        alignSelf:'center',
        marginTop:'5%',
        fontFamily:'Helvetica',
        fontSize:20,

    },
    imageGif:{
        width: 300,
        height: 300,
        alignSelf:'center'
    }



});
