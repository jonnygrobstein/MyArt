import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

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
  const { authState, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator> 
        {authState?.authenticated ? (
          <Stack.Screen 
            name="AccountScreen" 
            component={AccountScreen} 
            options={{ headerRight: () => <Button onPress={onLogout} title="Log Out" />,
        }}></Stack.Screen>
        ) : (
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false}}></Stack.Screen> 
        )}
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true}} /> 
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: true}} />
          <Stack.Screen name="ArtworkScreen" component={ArtworkScreen} options={{ headerShown: false}} />
          <Stack.Screen name="ArtDetails" component={ArtDetails} options={{ headerShown: false}} />
          <Stack.Screen name="ArtDetailsEditScreen" component={ArtDetailEditScreen} options={{ headerShown: false}} />
          <Stack.Screen name="ArtistDetails" component={ArtistDetails} options={{ headerShown: false}} />
          <Stack.Screen name="ArtistDetailEditScreen" component={ArtistDetailEditScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
});
