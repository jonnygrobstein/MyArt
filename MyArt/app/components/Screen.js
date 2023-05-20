import { SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'


export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView style={[styles.view, style]}>{children}</ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
      flex: 1,
    }
})