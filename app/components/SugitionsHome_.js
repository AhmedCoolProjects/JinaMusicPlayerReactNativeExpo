import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Dim_ } from "./Constants_";
import TopTabScrollingHorizontal_ from "./TopTabScrollingHorizontal_";

export function LastListened_({navigation}) {
  return (
    <View>
      <Text style={styles.catygoryTitle}>Last Listent</Text>
      <TopTabScrollingHorizontal_ navigation={navigation} />
    </View>
  );
}
export function MostListent_({navigation}) {
  return (
    <View>
      <Text style={styles.catygoryTitle}>Most Listent</Text>
      <TopTabScrollingHorizontal_ navigation={navigation}/>
    </View>
  );
}
export function Favorites_({navigation}) {
  return (
    <View>
      <Text style={styles.catygoryTitle}>Favorites</Text>
      <TopTabScrollingHorizontal_ navigation={navigation}/>
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
