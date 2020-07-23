import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      backgroundColor: colors.primary,
      iconName: "format-list-bulleted",
    },
  },
  {
    title: "My Messages",
    icon: {
      backgroundColor: colors.secondary,
      iconName: "email",
    },
    targetScreen: routes.MESSAGES,
  },
];
const AccountsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/shivank.png")}
          title="Shivank Yadav"
          description="shivank256@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.iconName}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGray,
  },
});
export default AccountsScreen;
