import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen';
import ArtworkScreen from '../screens/ArtworkScreen';
import ArtDetails from '../screens/ArtDetails';
import ArtDetailEditScreen from '../screens/ArtDetailEditScreen';
import ArtistDetails from '../screens/ArtistDetails';
import ArtistDetailEditScreen from '../screens/ArtistDetailEditScreen';

const Stack = createStackNavigator();

export default function Navigator(props) {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false}} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ArtworkScreen" component={ArtworkScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ArtDetails" component={ArtDetails} options={{ headerShown: false}} />
        <Stack.Screen name="ArtDetailsEditScreen" component={ArtDetailEditScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ArtistDetails" component={ArtistDetails} options={{ headerShown: false}} />
        <Stack.Screen name="ArtistDetailEditScreen" component={ArtistDetailEditScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});
