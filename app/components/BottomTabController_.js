import React,{useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dim_, Colors } from "./Constants_";
import { Feather, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { myContext } from "./ContextApiFct_";

export default function BottomTabController_() {
  const {isOn,setIsOn} = useContext(myContext);
  return (
    <View style={styles.container}>
      <SimpleLineIcons style={styles.icons_1} name="playlist" />
      <AntDesign style={styles.icons_} name="leftcircleo" />
      {isOn ? (
        <Feather onPress={()=>setIsOn(false)} style={styles.icons_} name="pause-circle" />
      ) : (
        <Feather onPress={()=>setIsOn(true)} style={styles.icons_} name="play-circle" />
      )}
      <AntDesign style={styles.icons_} name="rightcircleo" />
      <AntDesign name="up" style={styles.icons_2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dim_.widthWindow - 8,
    alignSelf: "center",
    backgroundColor: "red",
    height: Dim_.heightWindow / 12,
    borderRadius: Dim_.borderRadiusL,
    borderWidth: 2,
    borderColor: Colors.title,
    borderRadius: Dim_.borderRadiusL,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    flexDirection: "row",
  },
  icons_: {
    marginHorizontal: 8,
    fontSize: Dim_.iconsSize,
    color: Colors.title,
  },
  icons_1: {
    marginHorizontal: 8,
    fontSize: Dim_.iconsSize,
    color: Colors.title,
    position: "absolute",
    left: 8,
  },
  icons_2: {
    marginHorizontal: 8,
    fontSize: Dim_.iconsSize,
    color: Colors.title,
    position: "absolute",
    right: 0,
  },
});
