// src/screens/Register.js
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import RegisterForm from '../components/register-form';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <RegisterForm> </RegisterForm>
      </View>
    );
  }
}

export default function RegisterScreen() {
  const navigation = useNavigation();
  return <Register navigation={navigation} />;
}
