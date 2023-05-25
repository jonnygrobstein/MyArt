import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'


import Screen from '../components/Screen'
import { useAuth } from '../context/AuthContext';



export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');


    const formData = new FormData();
        formData.append("login", {
        email: email,
        password: password,
        });

        const handleSubmit = (values) => {
            console.log(values);
        }
    
    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo.png")} />
            <AppForm 
                initialValues={{ 
                    email: '', 
                    password: '', 
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                    // value={email}
                    // onChangeText={text => setEmail(text)}
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                    // value={password}
                    // onChangeText={text => setPassword(text)}
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})