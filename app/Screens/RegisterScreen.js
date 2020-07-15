import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const vs = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={vs}
      >
        <AppFormField
          autoCorrect={false}
          iconName="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          name="password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RegisterScreen;
