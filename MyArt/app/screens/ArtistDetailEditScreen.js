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
  name: Yup.string().required().min(1).label("Name"),
  nationality: Yup.string().label("Nationality"),
  livesIn: Yup.string().label("Resides in"),
  birthYear: Yup.number().label("Year of Birth"),
  deathYear: Yup.number().label("Year Deceased"),
  methods: Yup.string().label("Art Styles"),
  bio: Yup.string().label("Bio"),
  images: Yup.array().label("Image")
});


export default function ArtistDetailEditScreen() {
  const [artist, setArtist] = useState([])
    

    const retrieveArtist = async() => {
        await axios
        .post(
            `https://localhost:8000/api/user/artist/`,
            formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        ) 
        .then((res) => {
            setArtist(res.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    retrieveArtist()
  
  
  
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          image:[],
          name: "",
          nationality: "",
          livesIn: "",
          birthYear: "",
          deathYear: "",
          methods: "",
          bio: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="image" />
        <FormField maxLength={255} name="name" placeholder="Name" />
        <FormField maxLength={255} name="nationality" placeholder="Nationality" />
        <FormField maxLength={255} name="liveIn" placeholder="Residence" />
        <FormField
          keyboardType="numeric"
          maxLength={4}
          name="birthYear"
          placeholder="Year Born"
        />
        <FormField
          keyboardType="numeric"
          maxLength={4}
          name="deathYear"
          placeholder="Year Deceased"
        />
        <FormField maxLength={255} name="methods" placeholder="Art Styles" />
        <FormField
          multiline
          name="bio"
          numberOfLines={3}
          placeholder="Bio"
        />
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

