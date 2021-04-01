import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/core';



function  ShoppingCartIcon(props) {
    const navigation = useNavigation();
    return (
        <View style={{padding: 5 }}>
            <View style={{position:"absolute", height: 30, width: 30, 
            borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, 
            bottom: 15, alignItems:'center', justifyContent:'center', zIndex:2000}}>
                <Text>{props.cartItems.length}</Text>
            </View>
            <Ionicons onPress={() => navigation.navigate('Cart')}  name="ios-cart" size={30}/>
        </View>


    );
}


const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(ShoppingCartIcon)