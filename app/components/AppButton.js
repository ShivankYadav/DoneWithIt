import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function AppButton(props) {
  // we are going to use custom UI design using containers

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.color }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 5,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});
export default AppButton;
