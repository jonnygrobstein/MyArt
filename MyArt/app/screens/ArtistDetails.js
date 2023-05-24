import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

import AppText from '../components/AppText'
import colors from '../config/colors'

export default function ArtistDetails({ id }) {

    const [artist, setArtist] = useState([])
    

    const retrieveArtist = async() => {
        await axios
        .get(
            `https://localhost:8000/api/user/artist/${id}`,
        ) 
        .then((res) => {
            setArtist(res.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    retrieveArtist()
  
    return (
        <View>
        <Image style={styles.image} source={require("../assets/jonnyprofile.jpg")} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.name}>Name: {artist.name}</AppText>
            <AppText style={styles.nationality}>Nationality: {artist.nationality}</AppText>
            <AppText style={styles.livesIn}>Residence: {artist.livesIn}</AppText>
            <AppText style={styles.birthYear}>Birth Year: {artist.birthYear}</AppText>
            <AppText style={styles.deathYear}>Died:{artist.deathYear}</AppText>
            <AppText style={styles.methods}>Art Styles: {artist.methods}</AppText>
            <AppText style={styles.bio}>Bio: {artist.bio}</AppText>
            <AppText style={styles.works}>List of works: {artist.works}</AppText>
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