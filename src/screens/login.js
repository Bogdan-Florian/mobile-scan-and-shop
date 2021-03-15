// src/screens/Home.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/core";
import LoginForm from '../components/login-form'

class Login extends React.Component{
    render() {
        const { navigation } = this.props;
        return(
        <View>
            <LoginForm> </LoginForm>
        </View>
        );
    }

}
export default function LoginScreen() {
    const navigation = useNavigation();
    return <Login navigation={navigation} />;
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
