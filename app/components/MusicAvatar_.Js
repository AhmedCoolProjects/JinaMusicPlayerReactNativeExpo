import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Colors, Dim_ } from "./Constants_";
const widthContainer = Dim_.widthWindow / 1.2;
export default function MusicAvatar_({ poster, inFavorites }) {
  const [fav, setFav] = useState(inFavorites);

  return (
    <View style={styles.conteiner}>
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
      <Avatar.Image size={Dim_.widthWindow / 1.6} source={{ uri: poster }} />
    </View>
  );
}
const styles = StyleSheet.create({
  conteiner: {
    width: widthContainer,
    height: widthContainer,
    backgroundColor: Colors.background,
    alignSelf: "center",
    borderRadius: Dim_.borderRadiusL,
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    fontSize: Dim_.iconsSize + 8,
    color: Colors.title,
    position: "absolute",
    right: widthContainer / 13,
    top: widthContainer / 13,
  },
});
