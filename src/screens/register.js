// src/screens/Register.js
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/core";
import RegisterForm from '../components/register-form'
class Register extends React.Component{
    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.container}>

                <RegisterForm>

                </RegisterForm>

                {/*<Text style={styles.text}>Register Screen</Text>*/}
            </View>
        );
    }

}

export default function RegisterScreen() {
    const navigation = useNavigation();
    return <Register navigation={navigation} />;
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
    }
});
