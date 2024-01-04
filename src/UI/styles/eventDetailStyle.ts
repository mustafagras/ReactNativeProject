import { StyleSheet } from "react-native";
import { colors } from "../Color";
import { height, width } from "../Size";

const eventDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
  },
  image: {
    width: width,
    height: height * 0.3,
  },
  textContainer: {
    gap: 10,
    padding: "5%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.black,
  },
  subTitle: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "600",
  },
  itemTitle: {
    fontWeight: "600",
    color: colors.black,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  desc: {
    color: colors.black,
    fontSize: 12,
  },
  mapView: {
    width: width * 0.8,
    height: 150,
    marginHorizontal: "5%",
  },
  refundText: {
    padding: 10,
  },
});
export default eventDetailStyle;
