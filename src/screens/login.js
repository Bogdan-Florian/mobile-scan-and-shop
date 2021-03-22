// src/screens/Home.js
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import LoginForm from '../components/login-form';

class Login extends React.Component {
  render() {
    return (
      <LoginForm> </LoginForm>
    );
  }
}
export default function LoginScreen() {
  const navigation = useNavigation();
  return <Login navigation={navigation} />;
}
