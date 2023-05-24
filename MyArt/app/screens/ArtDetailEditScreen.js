import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";


import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  artist: Yup.string().label("Artist"),
  year: Yup.number().label("Year Created"),
  location: Yup.string().label("Location"),
  medium: Yup.string().label("Medium"),
  description: Yup.string().label("Description"),
  notes: Yup.string().label("My Notes"),
  image: Yup.array().min(1, "Please select at least one image.")
});


export default function ArtDetailEditScreen() {
  const [artwork, setArtwork] = useState([])
    

    const retrieveArtwork = async() => {
        await axios
        .post(
            `https://localhost:8000/api/user/artwork/`,
            Form.onSubmit(values),
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json",
          },
        }
        ) 
        .then((res) => {
            setArtwork(res.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    retrieveArtwork()
  
  
  
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          image: [],
          title: "",
          artist: "",
          year: "",
          location: "",
          medium: "",
          description: "",
          notes: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="image" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField maxLength={255} name="artist" placeholder="Artist" />
        <FormField
          keyboardType="numeric"
          maxLength={4}
          name="year"
          placeholder="Year Created"
        />
        <FormField maxLength={255} name="location" placeholder="Location" />
        <FormField maxLength={255} name="medium" placeholder="Medium" />
        <FormField
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <FormField multiline name="notes" numberOfLines={3} placeholder="My Notes" />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

