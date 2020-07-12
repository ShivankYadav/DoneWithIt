//import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import AccountsScreen from "./app/Screens/AccountsScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";
import Screen from "./app/components/Screen";
import { TextInput, Text } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];
export default function App() {
  console.log("App Executed");
  const [category, setCategory] = useState(); // initialized state of picker.
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        iconName="apps"
        items={categories}
        placeholder="Categories"
      />
      <AppTextInput placeholder="UserName" iconName="email" />
    </Screen>
  );
}
