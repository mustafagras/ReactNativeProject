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
  iconButtonStyle: {
    position: "absolute",
    zIndex: 1,
    width: 25,
    height: 25,
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    top: (width * 0.5) / 2 - 12.5,
  },
  leftIcon: {
    left: -10,
  },
  icon: {
    width: 15,
    height: 15,
  },
  rightIcon: {
    right: -10,
  },
  userContainer: {
    width: width * 0.4,
    height: width * 0.5,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  userImageContainer: {
    width: "90%",
    height: "60%",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: colors.white,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "80%",
    borderColor: colors.aliceBlue,
    borderWidth: 1,
    borderTopWidth: 0,
    height: "40%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  boldText: {
    fontWeight: "600",
    fontSize: 11,
    textAlign: "center",
  },
  titleStyle: {
    fontSize: 11,
    textAlign: "center",
  },
});

export default homeStyle;
