import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onImageChange }) {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) alert("Give permission to access the Gallery");
  };

  useEffect(() => {
    requestPermission();
  }, []); // runs only once

  const handlePress = () => {
    // if we don't have an image at the moment of touching this view, we are going to show the image library
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete Image", "Are You sure?", [
        { text: "Yes", onPress: () => onImageChange(null) },
        { text: "No" },
      ]);
  };

  // a function to import image from library
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onImageChange(result.uri);
    } catch (error) {
      console.log("Error reading an image ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.mediumGray}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
