import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ArtworkScreen from '../screens/ArtworkScreen';
import ArtDetails from '../screens/ArtDetails';

const Stack = createStackNavigator();

const ArtworkNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Artwork" component={ArtworkScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ArtDetails" component={ArtDetails} />
    </Stack.Navigator>
)

export default ArtworkNavigator