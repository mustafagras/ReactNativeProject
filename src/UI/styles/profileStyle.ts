import { StyleSheet } from "react-native";
import { colors } from "../Color";
import { width } from "../Size";

const profileStyle = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  redContainer: {
    width: width,
    height: 200,
    backgroundColor: colors.indianred,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  opacityRed: {
    width: width / 2,
    height: width / 2,
    borderRadius: width / 2,
    backgroundColor: colors.red,
    opacity: 0.6,
    position: "absolute",
  },
  circle1: {
    top: -100,
    right: -30,
  },
  circle2: {
    right: 20,
    top: 30,
  },
  circle3: {
    left: -20,
    top: -50,
  },
  userContainer: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: colors.red,
    borderRadius: width * 0.3,
    padding: 2,
    top: -(width * 0.3) / 2,
    left: width / 2 - (width * 0.3) / 2,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: width * 0.3,
  },
  title: {
    zIndex: 10,
    fontWeight: "700",
    fontSize: 28,
  },
  subContainer: {
    top: -((width * 0.3) / 2) + 20,
  },
  infoContainer: {
    marginHorizontal: "5%",
    width: "90%",
    padding: "5%",
    borderColor: colors.indianred,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
    gap: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: "5%",
    width: "100%",
  },
});

export default profileStyle;
