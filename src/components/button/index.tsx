import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomButtonProps } from "../../types";
import CustomText from "../text";
import styles from "./buttonStyle";

export default function CustomButton({
  tx,
  color,
  onPress,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={() => onPress()}
    >
      <CustomText tx={tx} style={styles.buttonText} />
    </TouchableOpacity>
  );
}
