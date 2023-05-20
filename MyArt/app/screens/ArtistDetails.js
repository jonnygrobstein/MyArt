import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import AppText from '../components/AppText'
import colors from '../config/colors'

export default function ArtistDetails({ name, nationality, livesIn, birthYear, deathYear, methods, bio, works }) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jonnyprofile.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.name}>Name: {name}</AppText>
        <AppText style={styles.nationality}>Nationality: {nationality}</AppText>
        <AppText style={styles.livesIn}>Residence: {livesIn}</AppText>
        <AppText style={styles.birthYear}>Birth Year: {birthYear}</AppText>
        <AppText style={styles.deathYear}>Died:{deathYear}</AppText>
        <AppText style={styles.methods}>Art Styles: {methods}</AppText>
        <AppText style={styles.bio}>Bio: {bio}</AppText>
        <AppText style={styles.works}>List of works: {works}</AppText>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    bio: {
        fontSize: 16,
        fontWeight: 400,
    },
    birthYear: {
        fontSize: 16,
        fontWeight: 400,
    },
    deathYear: {
        fontSize: 16,
        fontWeight: 400,
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        marginTop: 50,
        width: "100%",
        height: 400,
    },
    livesIn: {
        fontSize: 16,
        fontWeight: 400,
    },
    methods: {
        fontSize: 16,
        fontWeight: 400,
    },
    name: {
        fontSize: 24,
        fontWeight: 600,
        color: colors.primary,
    },
    nationality: {
        fontSize: 20,
        fontWeight: 500,
    },
    works: {
        fontSize: 16,
        fontWeight: 400,
    },
})