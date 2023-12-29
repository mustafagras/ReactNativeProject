import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomTextProps } from "../../types";
import CustomText from "../text";
import styles from "./checkboxStyle";

export default function CustomCheckbox({ tx }: CustomTextProps) {
  const keys = tx.split(" ");
  const customText = keys.map((tx, index) => (
    <CustomText tx={tx} key={index} />
  ));
  return (
    <TouchableOpacity style={styles.checkboxContainer}>
      <View style={styles.checkboxSubContainer}>
        <View style={styles.checkboxBorder} />
        <Text style={styles.checkboxInfo}>{customText}</Text>
      </View>
    </TouchableOpacity>
  );
}
