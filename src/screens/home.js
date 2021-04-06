import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../components/home";
import Settings from "../components/settings";
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import CartScreen from './CartScreen';

const HomeStackDrawerNavigator = createDrawerNavigator();
const HomeStack = createStackNavigator();

function Home() {
    return (
        <HomeStackDrawerNavigator.Navigator>
            <HomeStackDrawerNavigator.Screen name="HomeStack" component={HomeStackScreen}
                                             options={{ title:'Home'}}/>
            <HomeStackDrawerNavigator.Screen name="Settings" component={Settings}
                                             options={{ title:'Settings'
                                             }}
            />
        </HomeStackDrawerNavigator.Navigator>


    );
}

const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}
                        options={{headerShown: false,
                        }}/>
      <HomeStack.Screen name="Cart" component={CartScreen} />


    </HomeStack.Navigator>
  );

export default Home;
