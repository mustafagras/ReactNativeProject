import { StyleSheet } from "react-native";
import { height, width } from "../../UI/Size";

const styles = StyleSheet.create({
  cardContainer: {
    width: width - width * 0.1,
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
  },
});

export default styles;
