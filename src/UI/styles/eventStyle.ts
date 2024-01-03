import { StyleSheet } from "react-native";
import { colors } from "../Color";

const eventStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    width: "90%",
    marginBottom: 10,
    padding: "5%",
    borderColor: colors.lightRed,
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
  img: {
    width: "30%",
    height: 50,
  },
  textContainer: {
    width: "65%",
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  smallText: {
    color: colors.grey,
    fontSize: 12,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    borderBottomWidth: 1,
  },
});

export default eventStyle;
