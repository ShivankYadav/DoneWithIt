import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppFormField from "../components/AppFormField";

// validation schema
const vs = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={vs}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
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

            <AppButton
              title="Log In"
              color={colors.primary}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
