import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDelete from "../components/ListItemDelete";

//temp. solution for data
var initialMessages = [
  {
    id: 1,
    title:
      "With an Android phone, you can scan this QR code with your Expo mobile app to load this project immediately.",
    description:
      "Enter your e-mail or phone number below and you will get a link to open the project for your mobile device.",
    image: require("../assets/mosh.jpg"),
  },

  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/shivank.png"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../assets/papa.jpg"),
  },
];
const MessagesScreen = () => {
  // using hooks
  // we must call the hooks only at the begining of function components

  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    // Delete the message
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => console.log("This message was tapped", item)}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
export default MessagesScreen;
