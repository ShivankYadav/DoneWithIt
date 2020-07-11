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

export default function App() {
  console.log("App Executed");
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder="UserName" iconName="email" />
      <Text>{firstName}</Text>
    </Screen>
  );
}

{
  /*
<TextInput
        placeholder="Email"
        style={{
          borderColor: "#ccc",
          borderBottomWidth: 1,
        }}
        onChangeText={(text) => setFirstName(text)}
        maxLength={20}
        clearButtonMode="always"
      />
*/
}
