import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const vs = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

// data for AppPicker
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListingsEditScreen = () => {
  const location = useLocation(); // this is a custom hook

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={vs}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingsEditScreen;

{
  /*
    category: Yup.object().required().nullable().label("Category"),
  
  <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        /> */
}
