import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.appText}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appText: {
    padding: 20,
  },
});
export default PickerItem;
