// src/screens/main.js
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import MainComponent from '../components/main-component'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <MainComponent> </MainComponent>
            </View>
        );
    }
}


export default function MainScreen() {
    const navigation = useNavigation();
    return <Main navigation={navigation} />;
}
