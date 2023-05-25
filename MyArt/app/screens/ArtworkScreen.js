import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Constants from 'expo-constants'


import artworkapi from '../../apis/artworkapi'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import { AuthContext } from '../context/AuthContext';



export default function ArtworkScreen({ navigation }) {
    const { authState } = useContext(AuthContext);
    const token = authState?.token;

    const [artwork, setArtwork] = useState([]);

    useEffect(() => {
        retrieveArtwork();
    }, []);

    const retrieveArtwork = async() => {
        try {
            const response = await axios.get(artworkapi, {
                headers: {
                    'Authorization': `Bearer ${token}`,  
                },
            }); 
        
            setArtwork(response.data)
        } catch (error) {
            console.log(error);
        }
    };
  
    return (
        <View style={styles.screen}>
            <FlatList 
                data={artwork}
                keyExtractor={(artwork) => artwork.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        artist={item.artist}
                        image={item.image}
                        id={item.id}
                        onPress={() => navigation.navigate(routes.ART_DETAILS, item)}
                    />
                )}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        // padding: 20,
        backgroundColor: colors.light,
    }
})