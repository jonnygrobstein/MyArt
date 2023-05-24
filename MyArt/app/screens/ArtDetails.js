import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppText from '../components/AppText'
import axios from 'axios'

import colors from '../config/colors'

export default function ArtDetails({ id }) {
    
    const [artwork, setArtwork] = useState([])
    

    const retrieveArtwork = async() => {
        await axios
        .get(
            `https://localhost:8000/api/user/artwork/${id}`,
        ) 
        .then((res) => {
            setArtwork(res.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    retrieveArtwork()

  return (
    <View>
      <Image style={styles.image} source={artwork.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Title: {artwork.title}</AppText>
        <AppText style={styles.artist}>Artist: {artwork.artist}</AppText>
        <AppText style={styles.year}>Year created: {artwork.year}</AppText>
        <AppText style={styles.location}>Location: {artwork.location}</AppText>
        <AppText style={styles.medium}>Medium: {artwork.medium}</AppText>
        <AppText style={styles.description}>Description: {artwork.description}</AppText>
        <AppText style={styles.notes}>My Notes: {artwork.notes}</AppText>
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