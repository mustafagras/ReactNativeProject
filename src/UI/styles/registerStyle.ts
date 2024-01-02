import { StyleSheet } from "react-native";
import { colors } from "../Color";

const registerStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.opacityBlack,
  },
  modalWhiteContainer: {
    width: "80%",
    height: "80%",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: "2.5%",
    alignItems: "center",
  },
  closeButton: {
    width: "100%",
    alignItems: "flex-end",
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
});

export default registerStyle;
