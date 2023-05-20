import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function ViewImageScreen({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image 
                resizeMode="contain" 
                style={styles.image} 
                source={require('../assets/ChaosInside.jpg')} 
            />
            <Text style={styles.artTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    artTitle: {
        textAlign: "center",
        color: colors.white,
        marginTop: 50,
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default ViewImageScreen;