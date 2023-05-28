import React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AccountScreen from './app/screens/AccountScreen';
import ArtworkScreen from './app/screens/ArtworkScreen';
import ArtDetailEditScreen from './app/screens/ArtDetailEditScreen';
import ArtDetails from './app/screens/ArtDetails';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { AuthProvider, useAuth } from './app/context/AuthContext';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Login from './app/screens/Login';
import axios from 'axios';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
      <AuthProvider>
        <View style={{flex: 1}}>
          <Layout />
        </View>
      </AuthProvider>    
  )
}

export const Layout = () => {
  const { authState, onLogout } = useAuth();

  return (
      <NavigationContainer>
        <Stack.Navigator> 
          {authState?.authenticated ? (
            <>
            <Stack.Screen 
              name="AccountScreen" 
              component={AccountScreen} 
              options={{ headerRight: () => <Button onPress={onLogout} title="Log Out" />,}}
            />
            <Stack.Screen 
              name="ArtworkScreen" 
              component={ArtworkScreen} 
              options={{ title: 'Artwork' }}
            />
            <Stack.Screen 
              name="ArtDetails" 
              component={ArtDetails} 
              options={{ title: 'Art Details' }}
            />
            <Stack.Screen 
              name="ArtDetailEditScreen" 
              component={ArtDetailEditScreen} 
              options={{ title: 'Edit Art Details' }}
            />
            <Stack.Screen 
              name="ViewImageScreen" 
              component={ViewImageScreen} 
              options={{ title: 'View Image' }}
            />
          </>
          ) : (
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}></Stack.Screen>
          )} 
        </Stack.Navigator>
      </NavigationContainer>
  )
}
