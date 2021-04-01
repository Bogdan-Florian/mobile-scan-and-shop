import React,{useState} from 'react';
import {
    View,StyleSheet, Text, Button, Alert, TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";

function HomeScreen({navigation}) {
    const handleClick = () => {
        navigation.openDrawer()
    };
    return (
        <>
            <StatusBar hidden={true} > </StatusBar>
            <View style={
                {
                    flex:1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    backgroundColor:'#fff2323',
                }
            }>

                <View name={"TopBar"} style={{flex:1, flexDirection:'row', alignItems:'flex-start', backgroundColor:'#007aff'}}>


                    <AntDesign.Button  name="bars" size={35} onPress={handleClick}/>

                    <Text style={{flexGrow:1 ,textAlign:'center', alignSelf: 'center'}}>
                        Application name
                    </Text>

                </View>
            </View>

            <View>
                <Text>
                    Image logo instead of this Text
                </Text>

            </View>


            <View style={{flex:7, backgroundColor:'red'}}>
                <Text>
                    Display data in this view
                </Text>
            </View>

        </>

    );


}



export default HomeScreen;
