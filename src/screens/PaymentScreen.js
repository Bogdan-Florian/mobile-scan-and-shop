import React, {useState} from 'react'
import {Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {CreditCardInput} from "react-native-credit-card-input";

function PaymentScreen({ cartItems }){
    const _onChange = (formData) => {
        console.log(formData.valid)
        if (formData.valid === true) {
            Keyboard.dismiss()
        }
    }



    return (
        <View style={{display:'flex', flexGrow:1}}>

            <View style={style.container}>
            <CreditCardInput onChange={_onChange} style={style.container}>
                    autoFocus
                    size
                    returnKeyType='done'
                    requiresName
                    requiresCVC
                    requiresPostalCode
                    labelStyle={style.label}
                    inputStyle={style.input}
                    validColor={"black"}
                    invalidColor={"red"}
                    placeholderColor={"#007aff"}
                    additionalInputsProps

            </CreditCardInput>
            </View>

            <TouchableOpacity style={{flex:2, marginTop:50}}
                              activeOpacity={1}
                onPress={() =>Keyboard.dismiss()}>
            </TouchableOpacity>

            <TouchableOpacity style={{flex:2, alignSelf:'center', marginTop: 50}}
                              onPress={() => console.log('send order')}>
                <Text>
                    Pay: $99999
                </Text>
            </TouchableOpacity>
        </View>

    )


}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shop
    }
}

export default connect(mapStateToProps)(PaymentScreen);


const style = StyleSheet.create({
    container: {
        alignContent:'center',
        marginTop: 50,
    },
    label: {
        color: "#007aff",
        fontSize: 12,
    },
    input: {
        fontSize: 16,
        color: "#007aff",
    },
});