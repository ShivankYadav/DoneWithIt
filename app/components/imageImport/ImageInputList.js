import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imgUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal
      >
        <View style={styles.container}>
          {imgUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imgUri={uri}
                onImageChange={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onImageChange={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
