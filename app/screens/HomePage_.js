import React from "react";
import { ScrollView } from "react-native";
import { Colors, Dim_ } from "../components/Constants_";
import {
  Favorites_,
  LastListened_,
  MostListent_,
} from "../components/SugitionsHome_";

export default function HomePage_() {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.background, width: Dim_.widthWindow }}
    >
      <LastListened_ />
      <MostListent_ />
      <Favorites_ />
    </ScrollView>
  );
}
