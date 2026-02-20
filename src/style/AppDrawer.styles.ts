import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "../utils/scale";


const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: moderateScale(60),
    paddingHorizontal: moderateScale(24),
  },

  close: {
    color: "#fff",
    fontSize: 28,
    marginBottom: 20,
  },

  section: {
    color: "#7A7A7A",
    fontSize: 16,
    marginTop: 25,
    marginBottom: 10,
    fontWeight: "600",
  },

  divider: {
    height: 3,
    width: width * 0.7,
    marginBottom: 15,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  icon: {
    width: 26,
    height: 26,
    tintColor: "#fff",
    marginRight: 18,
  },

  menuText: {
    color: "#EAEAEA",
    fontSize: 18,
  },
});