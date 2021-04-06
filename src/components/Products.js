import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function Products(props) {
    function renderProducts(products){
        return products.map((item, index) => {
            return (
                <View style={{display:'flex', flexDirection:'row', backgroundColor:'007aff', marginTop:'5%', marginLeft:'1%', marginRight:'1%'}} key={index}>
                    <Image source={{uri: `${item.product_image}`}} style={{display:'flex', width: 150, height: 150, resizeMode: 'contain'}} />

                    <View style={{display:'flex', alignItems:'flex-start', flexDirection:'column', flexGrow:1, justifyContent:'center'}}>
                            <Text style={{fontFamily:'Helvetica', fontSize:20, color:'#4003da'}}>{item.description}</Text>
                            <Text style={{fontFamily:'Helvetica-Bold', color:'#4003da'}}>£{item.price.toFixed(2)}</Text>
                    </View>
                    <View title={"Button"} style={{display:'flex', alignItems:'flex-end', justifyContent:'center'}}>
                        <TouchableOpacity
                            style={{alignSelf:'flex-end'}}
                            onPress={() => props.onPress(item)}>
                            <Entypo name="add-to-list" size={35} style={{color:'#4003da'}} />
                        </TouchableOpacity>
                    </View>
                </View>



            )
        })
    }
    return (
        <View style={styles.container}>
            {renderProducts(props.products)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
    }
});
