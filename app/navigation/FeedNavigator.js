import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../Screens/ListingsScreen";
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
