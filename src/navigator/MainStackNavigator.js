import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LoginScreen from '../screens/login.js';
import RegisterScreen from '../screens/register.js';
import MainScreen from '../screens/main.js';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: ' Welcome' }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
