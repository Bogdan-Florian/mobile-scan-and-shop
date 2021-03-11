// src/screens/Home.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>



            <Text style={styles.text}>Login Screen</Text>




            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.buttonText}>Go to Register Screen</Text>
            </TouchableOpacity>



        </View>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#333',
        fontSize: 24,
        fontWeight: 'bold'
    },

    buttonContainer: {
        backgroundColor: '#895656',
        borderRadius: 5,
        padding: 10,
        margin: 20
    }




});
