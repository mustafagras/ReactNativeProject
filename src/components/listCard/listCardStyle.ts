import { StyleSheet } from "react-native";
import { colors } from "../../UI/Color";

const styles = StyleSheet.create({
  cardContainer: {
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
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  timer: {
    fontSize: 12,
  },
  desc: {
    fontSize: 12,
    color: colors.grey,
  },
});

export default styles;
