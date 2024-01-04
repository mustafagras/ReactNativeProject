import { StyleSheet } from "react-native";
import { colors } from "../../UI/Color";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.indianRed,
    padding: "5%",
    borderRadius: 4,
    width: "90%",
  },
  error: {
    fontSize: 10,
    color: colors.red,
    width: "90%",
    marginBottom: 10,
  },
});

export default styles;
