import React from "react";
import { View, Text, ScrollView } from "react-native";
import CardCategory_ from "./CardCategory_";

export default function TopTabScrollingHorizontal_({ navigation }) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <CardCategory_ navigation={navigation} />
      <CardCategory_ navigation={navigation} />
      <CardCategory_ navigation={navigation} />
      <CardCategory_ navigation={navigation} />
    </ScrollView>
  );
}
