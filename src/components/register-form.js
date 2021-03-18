import React, { useState } from 'react';
import {
  Text, StyleSheet, View, TextInput, TouchableOpacity, Button, Alert, Platform
} from 'react-native';
import {useNavigation} from "@react-navigation/core";

function RegisterForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

    return (
    <View style={styles.container}>

      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        style={styles.input}
      />

      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email Address"
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
        onPress={() => RegisterAccount(username,password,email, navigation)}

        style={styles.button}
      >
        <Text>Register now</Text>
      </TouchableOpacity>

    </View>

  );
}

function registrationAlert(response, navigator, success) {
    Alert.alert(
        "",
        response,
        [
            { text: "OK", onPress: () => {
                if (success) navigator.navigate("Login")

                }
            }
        ],
        { cancelable: false }
    );
}

function RegisterAccount(username, password, email, navigator) {
    let success = true
    return fetch('http://138.68.166.198/register',
      {
          method: 'POST',
          mode: 'cors',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
              {
                  username: username,
                  password: password,
                  email: email
              }),
      }
  )   .then(response => response.json())
      .then(responseJson => {
          registrationAlert("Account created successfully", navigator, success)
      })
      .catch(error => {
          success = false
          registrationAlert("Could not create account", navigator, success)
          console.error(error);
      });
}

export default RegisterForm;
const styles = StyleSheet.create({
  container: {
    marginTop: 300, // fix this
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
  },
});
