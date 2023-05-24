import React, { useContext } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import AppButton from '../components/AppButton';
import { AppForm, AppFormField } from '../components/forms';
import colors from '../config/colors'
import { Context } from '../components/globalContext/globalContext';

export default function AccountVerification({ navigation }) {
    
    const globalContext = useContext(Context)
    const { isLoggedIn } = globalContext

    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <AppForm
                initialValues={{ email: "" }}
                onSubmit={(values) => console.log(values)}
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
                />
            </AppForm>
            <View style={styles.buttonsContainer}>
                <AppButton title="Reset Password" onPress={() => navigation.navigate("AccountScreen")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: colors.white,
    }
})

