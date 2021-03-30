import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from '../screens/login.js';
import RegisterScreen from '../screens/register.js';
import QrcodeScreenStack from '../screens/qrcodeScanner.js';
import HomeScreen from '../screens/home';
import {AuthContext} from "../utils/context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingSplash from "../screens/splash";

const authStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const LoadingStack = createStackNavigator()
export const delay = ms => new Promise(res => setTimeout(res, ms));


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
                userToken = await AsyncStorage.getItem('useToken');
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
            signIn: async () => {
                AsyncStorage.setItem('userToken', JSON.stringify('success'))
                dispatch({type: 'SIGN_IN', token: 'success'});

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
                                <Tab.Screen name="Home" component={HomeScreen}/>
                                <Tab.Screen name="Qrcode Scanner" component={QrcodeScreenStack}/>
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
