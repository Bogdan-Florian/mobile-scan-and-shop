import React from 'react'
import { useNavigation } from '@react-navigation/core';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function Orders({ orders }) {
    const navigation = useNavigation();
    function renderOrders(orders){
        console.log(orders)
        return orders.map((item, index) => {
            return (
                <View style={{display:'flex', flexDirection:'row', backgroundColor:'007aff', marginTop:'5%', marginLeft:'1%', marginRight:'1%'}} key={index}>

                    <View style={{display:'flex', alignItems:'flex-start', flexDirection:'column', flexGrow:1, justifyContent:'center'}}>
                            <Text>{item.order_number}</Text>
                            <Text>{item.time_created}</Text>
                            <Text>{item.status}</Text>

                    </View>
                    <View title={"Button"} style={{display:'flex', alignItems:'flex-end'}}>
                        <TouchableOpacity
                            style={{alignSelf:'flex-end'}}
                            onPress={() => navigation.navigate('Order_page', {url: item.url})}>
                            <Entypo name="chevron-with-circle-right" size={35} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })
    }
    return (
        <View style={styles.container}>
            {renderOrders(orders)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        backgroundColor:'yellow',
    }
});
