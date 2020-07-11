import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={3}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What you are done with!</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color={colors.primary}
          onPress={() => console.log("Login Butoon tapped!")}
        />
        <AppButton
          title="register"
          color={colors.secondary}
          onPress={() => console.log("Register Butoon tapped!")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 15,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "700",
  },
});
export default WelcomeScreen;
