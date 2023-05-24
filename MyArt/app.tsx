import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AuthProvider } from './app/context/AuthContext';
import AccountScreen from "./app/screens/AccountScreen";
import Navigator from "./app/navigation/navigator";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <Navigator />
        </AuthProvider>
    )
}

export const Layout = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                { autheSTate?.authenticated ? 
                    <Stack.Screen name="AccountScreen" component={AccountScreen}
                }
            </Stack.Navigator>
        </NavigationContainer>
    );    
}