import React, { useState } from 'react';
import {
  Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, Image, ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {
  emailValidator, nameValidator, passwordValidator, UserNameValidator,
} from '../utils/utils';

function RegisterForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const _onSignUpPressed = async () => {
    const usernameError = UserNameValidator(username);
    const nameError = nameValidator(name);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (nameError || usernameError || emailError || passwordError) {
      Alert.alert('',
        nameError || usernameError || emailError || passwordError,
        [{ text: 'OK' }],
        { cancelable: false });
      return;
    }
    await RegisterAccount(username, password, email)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          navigation.navigate('Login');
        } else {
          Alert.alert('', data,
            [{ text: 'OK' }],
            { cancelable: false });
        }
      }).catch(() => {
        Alert.alert('', 'An unexpected error occured, please try later',
          [{ text: 'OK' }],
          { cancelable: false });
      });
  };

  return (
    <View style={styles.container}>
       <ImageBackground source={require('../resources/images/background.png')} style={{width: '100%', height: '100%'}}>
        <Image source={require('../resources/images/logo.png')} style={styles.logo} />

      <TextInput
        returnKeyType="next"
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Name"
        placeholderTextColor="#000000"
        style={styles.input}
      />
      <TextInput
        returnKeyType="next"

        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        placeholderTextColor="#000000"
        style={styles.input}
      />

      <TextInput
        returnKeyType="next"

        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email Address"
        placeholderTextColor="#000000"
        style={styles.input}
      />

      <TextInput
        returnKeyType="done"
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry = {true}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={() => {
          _onSignUpPressed();
        }}
        style={styles.button}
      >
        <Text>Register now</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>

  );
}

export function RegisterAccount(username, password, email) {
  return fetch('http://138.68.166.198/accounts',
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
          email,
        },
      ),
    });
}

export default RegisterForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
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
    justifyContent: 'center', 
    alignItems: 'center'
    
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebc43f',
    padding: 10,
    width: 200,
    height: 44,
    borderColor: '#825a19',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  logo: {
    marginTop: 20,
    width: 220,
    height: 120,
    margin: 95,
  }
});
