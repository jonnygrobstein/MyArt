import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import Screen from '../components/Screen'
import ListItem from '../components/lists/ListItem'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'


const initialArtList = [
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


export default function MyArtList(props) {
    const [artList, setArtList] = useState(initialArtList);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (art) => {
        setArtList(artList.filter((m) => m.id !== art.id))
    }
  
  return (
    <Screen>
        <FlatList
            data={artList}
            keyExtractor={(artList) => artList.id.toString()}
            renderItem={({ item }) => (
                <ListItem 
                    title={item.title}
                    subTitle={item.artist}
                    image={item.image} 
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() => (
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />
                    )}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setArtList([
                    {
                        id: 3,
                        title: "Order Amongst the Chaos 2",
                        artist: 'Jonny Grobstein',
                        image: require('../assets/OrderChaos.jpg'),
                    },
                ])
            }}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
    
})