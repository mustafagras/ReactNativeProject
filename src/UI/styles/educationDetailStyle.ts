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
  titleButton: {
    padding: 10,
    backgroundColor: colors.red,
    marginBottom: 10,
  },
  accordionTitle: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 16,
  },
  accordionContainer: {
    width: "100%",
    padding: "5%",
    gap: 10,
  },
  dataContainer: {
    width: "100%",
  },
});

export default educationDetailStyle;
