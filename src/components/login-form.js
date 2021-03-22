import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        style={styles.input}
      />

      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => LoginAuthentication(username, password, navigation)}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

function LoginAuthentication(username, password, navigator) {
  const success = true;
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
    .then((responseJson) => {
      LoginAlert(responseJson, navigator);
    })
    .catch((error) => {
      const responseJson = { status: 'fail' };
      LoginAlert(responseJson, navigator);
      console.error(error);
    });
}

function LoginAlert(response, navigator) {
  if (response.status === 'fail') {
    Alert.alert('Login Failed', 'Incorrect username or password', [{ text: 'Ok' }]);
  } else {
    navigator.navigate('Main');
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#23a5c7',
    padding: 10,
    width: 200,
    height: 44,
    marginBottom: 30,
  },
});

export default LoginForm;