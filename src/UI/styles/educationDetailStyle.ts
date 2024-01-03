import { StyleSheet } from "react-native";
import { colors } from "../Color";
import { height } from "../Size";

const educationDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  img: {
    width: "100%",
    height: height * 0.3,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  timer: {
    color: colors.grey,
    fontSize: 12,
  },
  desc: {
    fontSize: 12,
  },
  textContainer: {
    padding: "5%",
    gap: 10,
  },
});

export default educationDetailStyle;
