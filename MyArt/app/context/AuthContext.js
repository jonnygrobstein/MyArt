import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const TOKEN_KEY = 'my-jwt';
    const API_URL = 'http://localhost:8000/api/user/';

    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            console.log('stored:', token);

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({
                    token: token,
                    authenticated: true,
                });
            }
        };
        loadToken();
    }, []);

    const register = async (email, password) => {
        try {
          const result = await axios.post(`${API_URL}register/`, { email, password });
    
          console.log("file: AuthContext.js:41 ~ register ~ result:", result);
    
          setAuthState({
            token: result.data.token,
            authenticated: true
          });
    
          axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
    
          await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);
    
          return result;
        } catch (e) {
          return { error: true, msg: e.response.data.msg };
        }
      };

    const login = async (email, password) => {
        console.log('onLogin called');
        console.log('email:', email);
        console.log('password:', password);

        try {
            const result = await axios.post(`${API_URL}login/`, { email, password });
            console.log('login result:', result);

            console.log("file: AuthContext.tsx:41 ~ login ~ result:", result);

            setAuthState({
                token: result.data.access,
                authenticated: true
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.access}`;

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.access);

            return result;
        } catch (e) {
            console.log('login error:', e.response);
            return { error: true, msg: e.response.data.msg };
        }
    };

    const logout = async () => {
        // Delete token from storage
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        // Update HTTP Headers
        axios.defaults.headers.common['Authorization'] = '';

        // Reset auth state
        setAuthState({
            token: null,
            authenticated: false
        });
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};