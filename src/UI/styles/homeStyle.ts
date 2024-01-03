import { StyleSheet } from "react-native";
import { height, width } from "../Size";
import { colors } from "../Color";

const homeStyle = StyleSheet.create({
  cardFlatlistStyle: {
    height: height * 0.2,
    marginBottom: "5%",
  },
  partnerFlastlistStyle: {
    height: width * 0.27 * 2 + 10,
    marginBottom: 10,
  },
  partnerContainer: {
    width: width * 0.27,
    height: width * 0.27,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: colors.lightSkyBlue,
    borderWidth: 1,
    borderRadius: 4,
  },
  partnerImage: {
    width: "80%",
    height: "80%",
  },
  columnWrapperStyle: {
    width: width - width * 0.1,
    height: width * 0.27,
    marginBottom: 10,
    justifyContent: "space-between",
  },
});

export default homeStyle;
