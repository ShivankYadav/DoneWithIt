import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountsScreen from "../Screens/AccountsScreen";
import MessagesScreen from "../Screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountsScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
