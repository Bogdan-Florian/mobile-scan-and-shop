import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux'


function CartItems(props){

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
                <Button onPress={() => console.log("post request to server")} title={'Finish Order' + ' ' + total} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
        adjustQty: (product_id, value) => dispatch({ type: 'ADJUST_QTY', payload: {id: product_id, qty: value }})
    }
}

export default connect(null, mapDispatchToProps)(CartItems);

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        backgroundColor:'yellow',
    }
});
