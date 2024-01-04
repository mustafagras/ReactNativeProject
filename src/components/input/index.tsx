import React from "react";
import { Text, TextInput } from "react-native";
import { InputProps } from "../../types";
import styles from "./inputStyle";
import tr from "../../JSON/tr";
import { Controller } from "react-hook-form";

export default function Input(props: InputProps) {
  const {
    placeHolder,
    secureTextEntry = false,
    keyboardType = "default",
    control,
    name,
    errors,
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
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <TextInput
            value={value}
            onChangeText={(text) => onChange(text)}
            placeholder={customPlaceHolder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={styles.input}
            onBlur={onBlur}
          />
          {errors && <Text style={styles.error}>{errors.message}</Text>}
        </>
      )}
    />
  );
}
