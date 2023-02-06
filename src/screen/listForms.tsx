import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/listItem";
import Screen from "../components/Screen";
import loadForms from "./../formService/loadForms";

const FAKEFORMS = [
  {
    name: "Test01",
    description: "My First Form",
    entryCountToday: 1,
    isPublic: false,
    hash: "z2w7y1v0tpzni8",
  },
  {
    name: "Test02",
    description: "My Second Form",
    entryCountToday: 0,
    isPublic: true,
    hash: "z2q7y1v0tpzni8",
  },
];

const sourceId = "test";

export default function ListForms() {
  const [forms, setForms] = useState([]);

  //   const loadForms = () => {
  //     formService.getForms("test").then(
  //       (response: AxiosResponse) => {
  //         // do something!!!
  //         console.log("loadForms", response);
  //       },
  //       (error) => console.log(error)
  //     );
  //   };

  useEffect(() => {
    loadForms();
  }, []);

  const renderSeparator = () => <View style={styles.separator} />;

  const handlePress = (item: {}) => {
    console.log("handlePresss", item);
  };

  const handleButtonPress = () => {
    console.log("handleButtonPresss");
  };

  return (
    <Screen>
      <View style={styles.screen}>
        <FlatList
          data={FAKEFORMS}
          keyExtractor={(form) => form.hash}
          renderItem={({ item, index }) => (
            <ListItem
              id={item.hash}
              name={item.name}
              description={item.description}
              onPress={() => handlePress(item)}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <Button title="Continue" onPress={handleButtonPress} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "azure",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  screen: {
    padding: 20,
    backgroundColor: "whitesmoke",
  },
  separator: {
    backgroundColor: "black",
    height: 1,
  },
  title: {
    color: "darkred",
    fontSize: 20,
  },
  text: {
    color: "darkblue",
    fontSize: 16,
  },
});
