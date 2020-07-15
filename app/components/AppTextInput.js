import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defautlStyles from "../config/styles";
const AppTextInput = ({ iconName, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.mediumGray}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.mediumGray}
        style={defautlStyles.text}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
