import React from 'react';
import {View} from 'react-native';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.scss';
import Logo from './../../assets/img/Vector.svg';

const Login = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.screen_logo}>
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
      <View style={styles.screen_form}>
        <LoginForm />
      </View>
    </View>
  );
};

export default Login;
