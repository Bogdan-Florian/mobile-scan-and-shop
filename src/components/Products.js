import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image} from 'react-native'

export class Products extends Component {

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Image source={{uri: `${item.product_image}`}} style={{ width: 51, height: 51, resizeMode: 'contain'}} /> 
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                    <Button onPress={() => this.props.onPress(item)} title={'Add to cart'} />
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
            <View>
                {this.renderProducts(this.props.products)}
            </View>
            <View>
                {this.renderButton(this.props.products)}
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});