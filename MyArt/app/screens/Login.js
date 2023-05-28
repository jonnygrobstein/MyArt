import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet } from 'react-native';
import { Platform } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import axios from 'axios';

import colors from '../config/colors'
import { useAuth } from '../context/AuthContext';
import AppButton from '../components/AppButton';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin, onRegister } = useAuth();

    const handleLogin = async () => {
        console.log('handleLogin called')
        console.log('email:', email)
        console.log('password:', password)

        if (onLogin) {
          const result = await onLogin(email, password);
          if (result && result.error) {
            alert(result.msg);
          } 
        }
    }

    const handleRegister = async () => {
        const result = await onRegister(email, password);
        if (result && result.error) {
          alert(result.msg);
        } else {
            handleLogin();
        }
    }


  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        {/* {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />} */}
        <TextInput
            style={styles.text}
            name="email"
            icon="email"
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
        />
        <TextInput
            style={styles.text}
            name="password"
            icon="lock"
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
        />
        <AppButton onPress={handleLogin} title="Login" />
        <AppButton onPress={handleRegister} title="Register" />
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        borderColor: colors.black,
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "vertical",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        flex: 1,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
    },
    logo: {
        width: 153,
        height: 250,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    text: {
        color: colors.dark,
        fontSize: 18,
        width:'100%',
        padding: 10,
        marginTop: 15,
        borderColor: colors.dark,
        backgroundColor: colors.white,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
});

export default Login