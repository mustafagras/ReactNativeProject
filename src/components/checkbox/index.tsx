import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CustomCheckBoxProps } from "../../types";
import CustomText from "../text";
import styles from "./checkboxStyle";

export default function CustomCheckbox({
  tx,
  checked = false,
  onPress,
}: CustomCheckBoxProps) {
  const keys = tx.split(" ");
  const customText = keys.map((tx, index) => (
    <CustomText tx={tx} key={index} />
  ));
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={styles.checkboxSubContainer}>
        <View style={styles.checkboxBorder}>
          {checked && (
            <Image
              source={require("../../../assets/check.png")}
              style={styles.checkboxIcon}
              resizeMode="contain"
            />
          )}
        </View>
        <Text style={styles.checkboxInfo}>{customText}</Text>
      </View>
    </TouchableOpacity>
  );
}
