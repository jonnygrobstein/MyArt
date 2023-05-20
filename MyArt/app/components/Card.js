import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, artist, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card} >
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.artist} numberOfLines={2}>{artist}</AppText>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    artist: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    card: {
        borderRadius:15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
    }
});