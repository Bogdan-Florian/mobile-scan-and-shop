import React, { Component } from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

export default class Products extends Component {

    renderProducts = (products) => {
        console.log('asdsadasdasdasdas')
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Button onPress={() => this.props.onPress(item)} title={item.name + " - " + item.price} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});