import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { Colors, Dim_, Uri } from "./Constants_";

export default function CardCategory_() {
  const cardDim_ = Dim_.widthWindow / 3 - 3;
  return (
    <View
      style={{
        width: cardDim_,
        height: cardDim_,
        backgroundColor: Colors.card,
        borderRadius: Dim_.borderRadius,
        marginHorizontal: 4,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        source={{ uri: Uri.images[1] }}
        style={styles.ImageBackground}
      >
        <Text
          style={styles.text}
        >
          song title
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:"center"
  },
  text:{ fontSize: Dim_.textSize, fontWeight: Dim_.textFontWheight,color:Colors.title }
});
