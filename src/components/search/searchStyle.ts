import { StyleSheet } from "react-native";
import { width } from "../../UI/Size";
import { colors } from "../../UI/Color";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: "5%",
    justifyContent: "space-between",
    backgroundColor: colors.lightGrey,
    padding: "5%",
    borderRadius: 10,
  },
  input: {
    width: "85%",
  },
  icon: {
    width: width * 0.05,
    height: width * 0.05,
  },
});

export default styles;
