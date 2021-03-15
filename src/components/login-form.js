import {useNavigation} from "@react-navigation/core";
import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

function LoginForm() {
    const [name, setName] =  ("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <TextInput
                value={username}
                onChangeText={(username) => setUsername(username)}
                placeholder={'Username'}
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
        height:44,
        marginBottom: 50,
    },
});

export default LoginForm