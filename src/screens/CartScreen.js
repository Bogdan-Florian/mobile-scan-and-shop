 import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import CartItems from '../components/CartItems';

function CartScreen({ cartItems }){
    return (
        <View style={styles.container}>
            {cartItems.length > 0 ?
                <CartItems
                    products={cartItems} />
                : <Text>No items in your cart</Text>
            }
        </View>
    );
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