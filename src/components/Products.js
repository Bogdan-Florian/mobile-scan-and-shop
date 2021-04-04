import React, { Component } from 'react'
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';

export class Products extends Component {

    renderProducts = (products) => {
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

class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null,
            errorMessage: null
        };
    }

    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.qty}</Text>
                    <Button onPress={() => this.props.adjustQty(item.id, item.qty + 1)} title={'+'} />
                    <Button onPress={() => (item.qty - 1) !== 0 ? this.props.adjustQty(item.id, item.qty - 1) : this.props.removeItem(item)} title={'-'} />
                    <Button onPress={() => this.props.removeItem(item)} title={'Remove from cart'} />
                </View>

            )
        })
    }

    load = async () => {
        try {
            const response = await this.createOrder(this.props.cartItems);
            const result = await response.json();
            if (response.ok) {
                this.setState({response: result});
            } else {
                this.setState({errorMessage: result});
            }
        } catch (err) {
            this.setState({errorMessage: err});
        }

    }

    createOrder = async (cart) => {
        const url = 'https://genius-margin-8088.codio-box.uk/orders'
        return await fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'username',
                    status: 'status',
                    basket: cart
                })
            });
    }

    renderButton = (products) => {
        let total = 0
        products.map((item) => {
            total = total + item.price * item.qty
        })
        return (
            <View style={{ padding: 20 }}>
                <Button onPress={() => this.load()} title={'Finish Order' + ' ' + total} />
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

const mapStateToProps = (state) => {
    console.log(state.shop)
    return {
        cartItems: state.shop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
        adjustQty: (product_id, value) => dispatch({ type: 'ADJUST_QTY', payload: {id: product_id, qty: value }})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        backgroundColor:'yellow',
    }
});
