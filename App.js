import React, { useState } from "react";

import LoginScreen from "./app/Screens/LoginScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import ListingsEditScreen from "./app/Screens/ListingsEditScreen";

export default function App() {
  console.log("App Executed");
  return <ListingsEditScreen />;
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
