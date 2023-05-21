import { FlatList, StyleSheet } from 'react-native'
import React from 'react'

import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'
import Screen from '../components/Screen'

const artwork = [
    {
        id: 1,
        title: "Chaos Inside",
        artist: 'Jonny Grobstein',
        image: require('../assets/ChaosInside.jpg'),
    },
    {
        id: 2,
        title: "Order Amongst the Chaos",
        artist: 'Jonny Grobstein',
        image: require('../assets/OrderChaos.jpg'),
    },
]



export default function ArtworkScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={artwork}
            keyExtractor={artwork => artwork.id.toString()}
            renderItem={({ item }) => 
                <Card
                    title={item.title}
                    artist={item.artist}
                    image={item.image}
                    onPress={() => navigation.navigate(routes.ART_DETAILS, item)}
                />
            }
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})