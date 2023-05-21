import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

import { Context, Provider } from './app/components/globalContext/globalContext';
import Navigator from './app/navigation/navigator';

export default function App() {
  
  return (
    <Provider>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </Provider>
  )
}


