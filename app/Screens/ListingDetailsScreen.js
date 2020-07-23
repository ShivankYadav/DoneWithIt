import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  // route is used to pass parameters through navigation
  // here we are collecting Listing item as parameter
  const listing = route.params;

  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>{"$" + listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            description="5 listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 7,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
