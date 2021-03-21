import React, { useState } from 'react';
import {
  Text, StyleSheet, View, TextInput, TouchableOpacity, Button, Alert, Platform
} from 'react-native';
import {useNavigation} from "@react-navigation/core";
import {emailValidator, nameValidator, passwordValidator, userAlert, UserNameValidator} from "../utils/utils";

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
            Alert.alert("",
                nameError || usernameError || emailError || passwordError,
                [{text: "OK",}],
                {cancelable: false});
            return;
        }
            await RegisterAccount(username, password, email)
                .then(response => response.json())
                .then(data => {
                  if (data.status === 'success'){
                      console.log(data)
                      navigation.navigate("Login")
                  }
                  else{
                      Alert.alert("", data,
                          [{ text: "OK"}],
                          { cancelable: false });}


                }).catch(error => {
                    Alert.alert("", "An unexpected error occured, please try later",
                        [{ text: "OK"}],
                        { cancelable: false })
                });
    }

    return (
    <View style={styles.container}>

      <TextInput
          returnKeyType="next"

          value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
          returnKeyType="next"

          value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        style={styles.input}
      />

      <TextInput
          returnKeyType="next"

          value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email Address"
        style={styles.input}
      />

      <TextInput
          returnKeyType="done"
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        onPress={() => {
            _onSignUpPressed()
        }
        }
        style={styles.button}
      >
        <Text>Register now</Text>
      </TouchableOpacity>

    </View>

  );
}

// export function registrationAlert(response, navigator, success) {

// }

export function RegisterAccount(username, password, email) {
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
      })
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
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#23a5c7',
    padding: 10,
    width: 200,
    height: 44,
  },
});
