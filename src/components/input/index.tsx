import React from "react";
import { TextInput } from "react-native";
import { InputProps } from "../../types";
import styles from "./inputStyle";
import tr from "../../JSON/tr";

export default function Input(props: InputProps) {
  const {
    value,
    setValue,
    placeHolder,
    secureTextEntry = false,
    keyboardType = "default",
  } = props;
  return (
    <TextInput
      value={value}
      onChangeText={(text) => setValue(text)}
      placeholder={placeHolder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={styles.input}
    />
  );
}
