import React, { useState }from "react";
import { Button, Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { Formik, useFormikContext } from 'formik';

import Screen from "../components/Screen";
import { AppFormField } from "../components/forms";
import { useAuth } from '../context/AuthContext';


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  re_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .label("Confirm Password"),
});



export default function RegisterScreen() {
  
  const { handleSubmit } = useFormikContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const { onRegister } = useAuth();
  
  // Automatically call the login after a successful registration  
  const register = async () => {
    console.log(email, password, rePassword)
    // const values = {email, password, rePassword};
    
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }

    if (onRegister) {
      const result = await onRegister(email, password);
      if (result && result.error) {
          Alert.alert("Error", result.msg);
      } 
    }
  };
  
  return (
    <Screen style={styles.container}>
      <Image 
        style={styles.logo}
        source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ name: "", email: "", password: "", re_password: "" }}
        onSubmit={register}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={(text) => setEmail(text)}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          onChangeText={(text) => setPassword(text)}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="re_password"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
          onChangeText={(text) => setRePassword(text)}
        />
        <Button type="submit" title="Register" onPress={handleSubmit} />
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

