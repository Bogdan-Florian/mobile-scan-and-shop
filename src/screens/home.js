import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../components/home";
import Settings from "../components/settings";
const HomeStackDrawerNavigator = createDrawerNavigator();


function Home() {
    return (
        <HomeStackDrawerNavigator.Navigator>
            <HomeStackDrawerNavigator.Screen name="Home" component={HomeScreen}/>
            <HomeStackDrawerNavigator.Screen name="Settings" component={Settings}/>
        </HomeStackDrawerNavigator.Navigator>


    );
}

export default Home;
