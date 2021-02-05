import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomTabControllerIntegrated } from "../components/BottomTabController_";
import { Colors, Dim_ } from "../components/Constants_";
import MusicAvatar_ from "../components/MusicAvatar_";
const widthContainer = Dim_.widthWindow / 1.2;

export default function RoomPlayed_({ route }) {
  const { lastSong } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{lastSong.artist}</Text>
      </View>
      <MusicAvatar_
        poster={lastSong.poster}
        inFavorites={lastSong.inFavorites}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{lastSong.views} Views</Text>
        <Text style={styles.text}>
          year of publish: {lastSong.yearOfPublish}
        </Text>
        <Text style={styles.text}>{lastSong.duration}</Text>
      </View>
      <BottomTabControllerIntegrated />
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    width: Dim_.widthWindow,
    paddingLeft: 15,
    height: Dim_.heightWindow / 12,
    backgroundColor: Colors.header,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: Dim_.titleSize,
    fontWeight: Dim_.titleFontWeight,
    color: Colors.title,
  },
  text: {
    fontSize: Dim_.titleSize,
    fontWeight: Dim_.titleFontWeight,
    color: "black",
  },
  textContainer: {
    width: widthContainer,
    height: widthContainer / 2,
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: 12,
  },
});
