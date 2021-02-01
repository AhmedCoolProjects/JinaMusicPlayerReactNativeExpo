import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Colors = {
  background: "#47c747",
  header: "#922105",
  text: "#0c2020",
  shadow: "#000000",
  title: "#7cf8f2",
  card: "#c01d11",
};

export const Dim_ = {
  widthWindow: windowWidth,
  heightWindow: windowHeight,
  textSize: 14,
  titleSize: 20,
  iconsSize:28,
  textFontWheight: "500",
  titleFontWeight: "700",
  borderRadius: 8,
  borderRadiusL: 30,
};

export const Uri = {
  images: [
    "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Image_du_Maroc_3.jpg",
  ],
};
