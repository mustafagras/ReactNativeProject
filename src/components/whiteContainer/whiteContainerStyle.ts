import { StyleSheet } from "react-native";
import { width } from "../../UI/Size";
import { colors } from "../../UI/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    padding: "5%",
    backgroundColor: colors.white,
    alignItems: "center",
  },
});

export default styles;
