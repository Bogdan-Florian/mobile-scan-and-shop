import React,{ Component } from 'react';
import {
    View,StyleSheet, Text, Button, Alert, TouchableOpacity, ScrollView,
} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";
import { Products } from './Products';
import { connect } from 'react-redux';
import ShoppingCartIcon from "./ShoppingCartIcon";

const BASE_URL = 'http://138.68.166.198/';
//


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            errorMessage: null
        };
    }

    load = async () => {
        try {
            const response = await this.getItems('1000000001');
            const result = await response.json();
            if (response.ok) {
                this.setState({items: result.data});
            } else {
                this.setState({errorMessage: result});
            }
        } catch (err) {
            this.setState({errorMessage: err});
        }

    }

    renderProducts = (items) => {
        console.log(items)
        return (
            <Products products={items} onPress={this.props.addItemToCart}/>
        )
    }

    getItems = async (qrcode) => {
        const itemUrl = `${BASE_URL}items/${qrcode}`;
        return await fetch(itemUrl,
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
    }

    componentDidMount() {
        this.load()
    }



    render() {
        return (
            <>
                <StatusBar hidden={true}/>
                <View style={styles.container}>


                    <View name={"TopBar"}
                          style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#007aff'}}>
                        <AntDesign.Button name="bars" size={35} onPress={() => {
                            this.props.navigation.openDrawer()
                        }}/>
                        <Text style={{flexGrow: 1, textAlign: 'center', alignSelf: 'center'}}>
                            Application name
                        </Text>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </View>


                </View>

                <View name="ProductList" style={{flex: 6, backgroundColor: 'red'}}>

                    {this.state.items === null ? <Text>Condition True</Text> :
                        (
                            <ScrollView>

                                <Products products={this.state.items} onPress={this.props.addItemToCart}/>

                            </ScrollView>
                        )


                    }

                </View>
            </>


        )
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
            payload:product})
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    }
  });
