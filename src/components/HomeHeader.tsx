import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Images from "../const/imgUrl";


const HomeHeader = () => {
  return (
    <View
  style={{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "#000",
  }}
>
  {/* Left */}
  <TouchableOpacity style={{ width: 40 }}>
    <Image
      source={Images.MENU}
      style={{ width: 35, height: 24, resizeMode: "contain" }}
    />
  </TouchableOpacity>

  {/* Center */}
  <View style={{ flex: 1, alignItems: "center" }}>
    <Image
      source={Images.Logo}
      style={{ height: 30, resizeMode: "contain" }}
    />
  </View>

  {/* Right */}
  <View
    style={{
      width: 70,
      flexDirection: "row",
      justifyContent: "flex-end",
    }}
  >
    <Image
      source={Images.ADDBTN}
      style={{ width: 35, height: 26, marginRight: 12 }}
    />
    <Image
      source={Images.ZAP}
      style={{ width: 35, height: 24 }}
    />
  </View>
</View>

  );
};

export default HomeHeader; 