import React from "react";
import { ScrollView, View } from "react-native";
import ListItem_ from "../components/ListItem_";
import { dataSong } from "../FackData_";
import BottomTabController_ from "../components/BottomTabController_";
import { Dim_ } from "../components/Constants_";

export default function ListPage_({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginBottom: Dim_.heightWindow / 12 }}>
        {dataSong.map((item, key) => (
          <ListItem_ key={key} item={item} />
        ))}
      </ScrollView>
      <BottomTabController_ navigation={navigation} />
    </View>
  );
}
