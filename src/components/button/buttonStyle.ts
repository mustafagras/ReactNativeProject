import { StyleSheet } from "react-native";
import { colors } from "../../UI/Colors";

const styles = StyleSheet.create({
  button: {
    width: "90%",
    padding: "5%",
    backgroundColor: colors.indianred,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default styles;
