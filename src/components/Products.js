import React, { Component } from 'react'
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native'
import { Entypo } from '@expo/vector-icons';

export class Products extends Component {

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <View style={{display:'flex', flexDirection:'row', backgroundColor:'007aff', marginTop:'5%', marginLeft:'1%', marginRight:'1%'}} key={index}>
                    <Image source={{uri: `${item.product_image}`}} style={{display:'flex', width: 100, height: 100, resizeMode: 'contain'}} />

                    <View style={{display:'flex', alignItems:'flex-start', flexDirection:'column', flexGrow:1, justifyContent:'center'}}>
                            <Text>{item.description}</Text>
                            <Text style={{}}>{item.price}$</Text>


                    </View>


                    <View title={"Button"} style={{display:'flex', alignItems:'flex-end'}}>
                        <TouchableOpacity
                            style={{alignSelf:'flex-end'}}
                            onPress={() => this.props.onPress(item)}>
                            <Entypo name="add-to-list" size={35} />
                        </TouchableOpacity>




                    </View>

                </View>



            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}

export class CartItems extends Component {

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                    <Button onPress={() => this.props.onPress(item)} title={'Remove from cart'} />
                </View>

            )
        })
    }

    renderButton = (products) => {
        console.log(products)
        let total = 0
        products.map((item) => {
            total = total + item.price
        })
        return (
            <View style={{ padding: 20 }}>
                <Button onPress={() => console.log("post request to server")} title={'Finish Order' + ' ' + total} />
            </View>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
                {this.renderButton(this.props.products)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        backgroundColor:'yellow',
    }
});
