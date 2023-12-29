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

  const deepLookup = (obj, path) => {
    const keys = path.split(":");
    let result = obj;

    for (const key of keys) {
      result = result?.[key];
      if (result === undefined) {
        break;
      }
    }

    return result;
  };

  const customPlaceHolder = deepLookup(tr[0], placeHolder) || placeHolder;
  return (
    <TextInput
      value={value}
      onChangeText={(text) => setValue(text)}
      placeholder={customPlaceHolder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={styles.input}
    />
  );
}
