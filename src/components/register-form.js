import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from "react-native";


function RegisterForm() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return (
        <View style={styles.container}>

            <TextInput
                value={name}
                onChangeText={(name) => setName(name)}
                placeholder={'Name'}
                style={styles.input}
            />


            <TextInput
                value={username}
                onChangeText={(username) => setUsername(username)}
                placeholder={'Username'}
                style={styles.input}
            />

            <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder={'Email Address'}
                style={styles.input}
            />

            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'password'}
                secureTextEntry={true}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                >
                <Text>Register now</Text>
            </TouchableOpacity>


        </View>

    );
}


export default RegisterForm;

const styles = StyleSheet.create({
    container: {
        marginTop:300,  //fix this
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width:300,
        height: 50,
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        marginBottom: 30,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#23a5c7",
        padding: 10,
        width:200,
        height:44
    },
});
