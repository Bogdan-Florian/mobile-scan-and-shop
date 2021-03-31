import { useNavigation } from '@react-navigation/core';
import React, { useState, Component } from 'react';
import {
    Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground,
} from 'react-native';
import {AuthContext} from "../utils/context";
import AsyncStorage from "@react-native-async-storage/async-storage";


function LoginForm() {
    const { signIn } = React.useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
}}/>
      <ImageBackground source={require('../resources/images/background.png')} style={{width: '100%', height: '100%'}}>
      <Image source={require('../resources/images/logo.png')} style={styles.logo} />
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        placeholderTextColor="#000000"
        style={styles.input}
      />

      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry = {true}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const loginResult = await LoginAuthentication(username, password);
          console.log(loginResult)
          if(loginResult.status === 'success'){
              signIn()
          }
          else{
              Alert.alert('Error', 'Login failed', [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: true });
          }
        }}
      >
        <Text style={{textAlign: 'center'}}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={{textAlign: 'center'}}>REGISTER</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
    
  );
}

function LoginAuthentication(username, password) {
  return fetch('http://138.68.166.198/login',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          username,
          password,
        },
      ),
    }).then((response) => response.json())
    .then((responseJson) => (responseJson))
    .catch((error) => ({ status: 'fail' }));
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2c2c2',
  },
  input: {
    height: 40,
    width: "70%",
    borderColor: '#825a19',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    
  },
  button: {
    width: "25%",
    borderColor: '#825a19',
    backgroundColor: '#ebc43f',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18,
    alignSelf: 'center' 
  },
  logo: {
    marginTop: 65,
    width: 220,
    height: 120,
    margin: 95,
  }
});

export default LoginForm;