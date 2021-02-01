import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, List } from "react-native-paper";
import { Colors, Dim_ } from "./Constants_";

export default function ListItem_({ item }) {
  const [fav, setFav] = useState(item.inFavorites);
  return (
    <List.Item
      style={styles.container}
      title={item.title}
      description={item.artist}
      left={() => <Avatar.Image source={{ uri: item.poster }} />}
      right={() => (
        <View>
          {fav ? (
            <AntDesign
              onPress={() => setFav(false)}
              name="heart"
              style={styles.icons}
            />
          ) : (
            <AntDesign
              onPress={() => setFav(true)}
              name="hearto"
              style={styles.icons}
            />
          )}

          <Text>{item.duration}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  icons: {
    fontSize: Dim_.iconsSize,
    color: Colors.title,
  },
  container: {
    backgroundColor: Colors.background,
  },
});
