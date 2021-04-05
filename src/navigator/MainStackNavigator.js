import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React,{useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from '../screens/login.js';
import RegisterScreen from '../screens/register.js';
import QrcodeScreenStack from '../screens/qrcodeScanner.js';
import {AuthContext} from "../utils/context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingSplash from "../screens/splash";
import { StatusBar } from 'react-native';
import Home from '../screens/home';


const authStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const LoadingStack = createStackNavigator()
export const delay = ms => new Promise(res => setTimeout(res, ms));

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

function MainStackNavigator() {



    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };

                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken
            try {
                userToken = await AsyncStorage.getItem('userToken');
                console.log("UserToken", userToken)
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);



    const authContext = React.useMemo(
        () => ({
            signIn: async (token) => {
                AsyncStorage.setItem('userToken', token)
                dispatch({type: 'SIGN_IN', token: token});

            },
            signOut: async () => {
                AsyncStorage.removeItem('userToken')
                dispatch({type: 'SIGN_OUT'})
            },
        }),
        []
    );


    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {state.isLoading ? (
                        <LoadingStack.Screen name="Splash" component={LoadingSplash} />
                    ) :


                    ( state.userToken !== null ? (
                        <>
                            <Tab.Navigator>
                                <Tab.Screen name="QrCodeStack" component={QrcodeScreenStack}/>
                                <Tab.Screen name="HomeDrawer" component={Home}/>
                            </Tab.Navigator>
                        </>
                    )
                    : (
                        <>

                            <authStack.Navigator>
                                <authStack. Screen name="Login" component={LoginScreen}/>
                                <authStack.Screen name="Register" component={RegisterScreen}/>
                            </authStack.Navigator>
                        </>
                            )
                        )}

            </NavigationContainer>

        </AuthContext.Provider>

    );
}

export default MainStackNavigator;
