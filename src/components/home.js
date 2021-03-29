import React, { Component } from 'react'
import {View, Text
} from 'react-native';
import { connect } from 'react-redux';
import { electronics } from '../../Data';
import Products from './Products';


class HomeScreen extends Component {
    render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Products products = {electronics} onPress={this.props.addItemToCart}/>
        </View>

    );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
        payload:product})
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen);
