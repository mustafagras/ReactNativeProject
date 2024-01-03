import React from "react";
import { View, TouchableOpacity } from "react-native";
import { CustomTextButtonProps } from "../../types";
import CustomText from "../text";
import styles from "./textButtonStyle";

export default function CustomTextButton({
  label,
  onPress,
}: CustomTextButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <CustomText tx={label} style={styles.textLine} />
      </TouchableOpacity>
    </View>
  );
}
