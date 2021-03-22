import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/login.js';
import RegisterScreen from '../screens/register.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from "../screens/home";
import SettingsScreen from "../screens/settings";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function HomeBottomTabNavigator(){
    return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}

        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

    )
}


function MainStackNavigator() {
  return (
    <NavigationContainer>

        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: ' Welcome' }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeBottomTabNavigator}
                      options={{headerLeft:null
                      }}

        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MainStackNavigator;
