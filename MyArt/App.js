import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AccountScreen from './app/screens/AccountScreen';
import ArtworkScreen from './app/screens/ArtworkScreen';
import ArtDetails from './app/screens/ArtDetails';
import ArtDetailEditScreen from './app/screens/ArtDetailEditScreen';
import ArtistDetails from './app/screens/ArtistDetails';
import ArtistDetailEditScreen from './app/screens/ArtistDetailEditScreen';
import { AuthProvider, useAuth } from './app/context/AuthContext';

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
  )
}
