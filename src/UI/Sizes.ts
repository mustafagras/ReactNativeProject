import { Dimensions } from "react-native";

const { width, height }: { width: number; height: number } =
  Dimensions.get("screen");

export { width, height };
