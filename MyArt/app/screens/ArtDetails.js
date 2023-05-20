import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'

import colors from '../config/colors'

export default function ArtDetails({ title, artist, year, medium, description, location, notes, route}) {
    const art = route.params;

  return (
    <View>
      <Image style={styles.image} source={art.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Title: {art.title}</AppText>
        <AppText style={styles.artist}>Artist: {art.artist}</AppText>
        <AppText style={styles.year}>Year created: {art.year}</AppText>
        <AppText style={styles.location}>Location: {art.location}</AppText>
        <AppText style={styles.medium}>Medium: {art.medium}</AppText>
        <AppText style={styles.description}>Description: {art.description}</AppText>
        <AppText style={styles.notes}>My Notes: {art.notes}</AppText>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    artist: {
        fontSize: 20,
        fontWeight: 500,
        color: colors.secondary,
    },
    description: {
        fontSize: 16,
        fontWeight: 400,
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        marginTop: 50,
        width: "100%",
    },
    location: {
        fontSize: 16,
        fontWeight: 400,
    },
    medium: {
        fontSize: 16,
        fontWeight: 400,
    },
    notes: {
        fontSize: 16,
        fontWeight: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        color: colors.primary,
    },
    year: {
        fontSize: 16,
        fontWeight: 400,
    },
})