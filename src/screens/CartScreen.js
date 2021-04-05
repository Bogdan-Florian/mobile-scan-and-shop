 import React from 'react'
import { Text, View, StyleSheet,ScrollView} from 'react-native'
import { connect } from 'react-redux'
import CartItems from '../components/CartItems';
import {EmptyCartPage} from '../components/EmptyCartPage'
function CartScreen({ cartItems }){
    return (
        <>

            {cartItems.length > 0 ?
                (
                    <ScrollView>

                    <CartItems products={cartItems} />
                    </ScrollView>
                )

                :
                (
                    <EmptyCartPage> </EmptyCartPage>
                )
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shop
    }
}

export default connect(mapStateToProps)(CartScreen);
