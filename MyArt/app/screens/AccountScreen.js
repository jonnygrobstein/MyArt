import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import ListItem from '../components/lists/ListItem'
import Icon from '../components/Icon'

import colors from '../config/colors'
import ListItemSeparator from '../components/lists/ListItemSeparator'

const menuItems = [
    {
        title: "My Art",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: "Artwork"
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "Messages",
    }
]

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem 
                title="Jonny Grobstein"
                subTitle="jonnygrobstein@gmail.com"
                image={require('../assets/jonnyprofile.jpg')}
            />
        </View>
        <View style={styles.container}>
            <FlatList 
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({ item }) => 
                    <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                        onPress={() => navigation.navigate(item.targetScreen)}
                    />
                }
            />            
        </View>
        <ListItem 
            title="Log Out"
            IconComponent={
                <Icon name="logout" backgroundColor='#ffe66d' />
            }
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})