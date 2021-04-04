 import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import CartItems from '../components/Products'

class CartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <CartItems
                        products={this.props.cartItems} />
                    : <Text>No items in your cart</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shop
    }
}




export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});