import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountScreen from '../screens/AccountScreen';
import ArtDetailEditScreen from '../screens/ArtDetailEditScreen';
import ArtworkNavigator from './ArtworkNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Artwork" 
            component={ArtworkNavigator} 
            options={{ 
                headerShown: false, 
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name="home" color={color} size={size} />
            }} 
        />
        <Tab.Screen 
            name="AddArtwork" 
            component={ArtDetailEditScreen} 
            options={({ navigation }) => ({ 
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("AddArtwork")}/>,
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            })} 
        />
        <Tab.Screen 
            name="Account" 
            component={AccountScreen} 
            options={{  
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name="account" color={color} size={size} />
            }} 
            />
    </Tab.Navigator>
)

export default AppNavigator