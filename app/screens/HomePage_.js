import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BottomTabController_ from "../components/BottomTabController_";
import { Colors, Dim_ } from "../components/Constants_";
import {
  Favorites_,
  LastListened_,
  MostListent_,
} from "../components/SugitionsHome_";

export default function HomePage_({navigation}) {
  return (
    <View style={styles.container}>
      <LastListened_ />
      <MostListent_ />
      <Favorites_ />
      <BottomTabController_ navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    width: Dim_.widthWindow,
    flex:1,
    padding: 8,
  },
});
