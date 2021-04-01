import React,{useState, Component} from 'react';
import {
    View,StyleSheet, Text, Button, Alert, TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";
import ShoppingCartOutlined from '@ant-design/icons'
import Products from './Products';
import { connect } from 'react-redux';
import { electronics } from '../../Data';
import {useNavigation} from "@react-navigation/core";
import ShoppingCartIcon from "./ShoppingCartIcon";
// const showDrawer = () => {
//     const navigation = useNavigation()
//     navigation.openDrawer()
// };


class HomeScreen extends Component {
        render(){
        return(

    <>
    <StatusBar hidden= {
        true
    }

> </StatusBar>
<View style={
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        backgroundColor: '#fff2323',
    }
}>

    <View name={"TopBar"} style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#007aff'}}>


        <AntDesign.Button name="bars" size={35} onPress={ () => {
            this.props.navigation.openDrawer()

        }}/>

        <Text style={{flexGrow: 1, textAlign: 'center', alignSelf: 'center'}}>
            Application name
        </Text>

        {/*<AntDesign.Button size={35} onPress={()=> <ShoppingCartIcon/>}/>*/}

        <ShoppingCartIcon>


        </ShoppingCartIcon>
                </View>
            </View>

            <View>
                <Text>
                    Image logo instead of this Text
                </Text>

            </View>


            <View style={{flex: 7, backgroundColor: 'red'}}>
                <Products products={electronics} onPress={this.props.addItemToCart}/>
            </View>

            </>
        );
        }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
            payload:product})
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen);



// export default HomeScreen;
// =======
// import React, { Component } from 'react'
// import {View, Text
// } from 'react-native';
// import { connect } from 'react-redux';
// import { electronics } from '../../Data';
// import Products from './Products';
//
//
// class HomeScreen extends Component {
//     render() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Products products = {electronics} onPress={this.props.addItemToCart}/>
//         </View>
//
//     );
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
//         payload:product})
//     }
// }
//
// export default connect(null, mapDispatchToProps)(HomeScreen);
// >>>>>>> cart_functionality
