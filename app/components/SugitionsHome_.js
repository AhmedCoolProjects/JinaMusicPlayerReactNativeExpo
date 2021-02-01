import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Dim_ } from "./Constants_";
import TopTabScrollingHorizontal_ from "./TopTabScrollingHorizontal_";

export function LastListened_() {
  return (
    <View>
      <Text style={styles.catygoryTitle}>Last Listent</Text>
      <TopTabScrollingHorizontal_  />
    </View>
  );
}
export function MostListent_() {
  return (
    <View>
      <Text style={styles.catygoryTitle}>Most Listent</Text>
      <TopTabScrollingHorizontal_ />
    </View>
  );
}
export function Favorites_() {
  return (
    <View>
      <Text style={styles.catygoryTitle}>Favorites</Text>
      <TopTabScrollingHorizontal_ />
    </View>
  );
}

const styles = StyleSheet.create({
  catygoryTitle: {
    fontSize: Dim_.titleSize,
    fontWeight: Dim_.titleFontWeight,
    marginLeft:8,
  },
});
