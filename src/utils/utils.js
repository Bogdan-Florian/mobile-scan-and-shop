import {Alert} from "react-native";

export function emailValidator(email){
    let re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';

    return '';
}

export function passwordValidator(password){
    if (!password || password.length <= 0) return 'Password cannot be empty.';

    return '';
}

export function nameValidator(name){
    if (!name || name.length <= 0) return 'Name cannot be empty.';
    return '';
}

export function UserNameValidator(username){
    if (!username || username.length <= 0) return 'Username cannot be empty.';
    return '';
}


export function userAlert(alertTitle, alertMessage){
        Alert.alert(alertTitle, alertMessage
        [{text: "OK",}],
        {cancelable: false}
        )
}