import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size * 0.5,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.5}
      ></MaterialCommunityIcons>
    </View>
  );
};

// note we are not creating stylesheet here to use the argument values directly for styling
export default Icon;
