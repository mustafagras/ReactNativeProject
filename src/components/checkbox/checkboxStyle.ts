import { StyleSheet } from "react-native";
import { colors } from "../../UI/Color";

const styles = StyleSheet.create({
  checkboxContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxSubContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxBorder: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.indianred,
  },
  checkboxInfo: {
    marginLeft: 10,
  },
});

export default styles;
