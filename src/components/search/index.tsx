import React from "react";
import { View, TextInput, Image } from "react-native";
import { SearchProps } from "../../types";
import tr from "../../JSON/tr";
import styles from "./searchStyle";

export default function Search({
  value,
  onChangeText,
  placeHolder,
}: SearchProps) {
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
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={customPlaceHolder}
        style={styles.input}
      />
      <Image
        style={styles.icon}
        source={require("../../../assets/icons/search.png")}
      />
    </View>
  );
}
