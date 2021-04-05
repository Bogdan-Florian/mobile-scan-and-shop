import React, { useEffect, useState } from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux'


function CartItems(props){
    const [errorMessage, setErrorMessage] = useState(null);
    const [response, setResponse] = useState(null);

    async function load(){
        try {
            const response = await createOrder(props.cartItems);
            const result = await response.json();
            if (response.ok) {
                setResponse(result);
            } else {
                setErrorMessage(result);
            }
        } catch (err) {
            setErrorMessage(err.message);
        }
    }
    async function createOrder(cart){
        const url = 'https://genius-margin-8086.codio-box.uk/orders'
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

    function renderProducts(products){
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.qty}</Text>
                    <Button onPress={() => props.adjustQty(item.id, item.qty + 1)} title={'+'} />
                    <Button onPress={() => (item.qty - 1) !== 0 ? props.adjustQty(item.id, item.qty - 1) : props.removeItem(item)} title={'-'} />
                    <Button onPress={() => props.removeItem(item)} title={'Remove from cart'} />
                </View>

            )
        })
    }

    function renderButton(products){
        let total = 0
        products.map((item) => {
            total = total + item.price * item.qty
        })
        return (
            <View style={{ padding: 20 }}>
                <Button onPress={async () => await load()} title={'Finish Order' + ' ' + total} />
            </View>

        )
    }

    return (
        <View style={styles.container}>
            {renderProducts(props.products)}
            {renderButton(props.products)}
        </View>
    );
}

const mapStateToProps = (state) => {
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
