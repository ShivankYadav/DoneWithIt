import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import ListingsEditScreen from "./app/Screens/ListingsEditScreen";
import { Button, Image } from "react-native";
import ImageInputList from "./app/components/imageImport/ImageInputList";

export default function App() {
  console.log("App Executed");

  const [imageUris, setImageUris] = useState([]); // list of uris

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imgUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}

// define labels for app picker testing

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

// Inside App
// const [category, setCategory] = useState();

//   return (
//     <Screen>
//       <AppPicker
//         selectedItem={category}
//         onSelectItem={(item) => setCategory(item)}
//         items={categories}
//         placeholder="Category"
//         iconName="email"
//       />
//     </Screen>
//   );
