import { StyleSheet } from "react-native";
import { colors } from "../Color";
import { width } from "../Size";

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: "5%",
    alignItems: "center",
  },
  subContainer: {
    width: "100%",
    padding: "5%",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  logo: { width: width * 0.8, height: width * 0.8 },
  input: {
    borderWidth: 1,
    borderColor: colors.indianred,
    padding: "5%",
    borderRadius: 4,
    width: "90%",
  },
});

export default loginStyle;
