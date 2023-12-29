import React from "react";
import { Text } from "react-native";
import { CustomTextProps } from "../../types";
import tr from "../../JSON/tr";

export default function CustomText({ tx, style }: CustomTextProps) {
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

  const customText = deepLookup(tr[0], tx) || tx;
  return <Text style={style}>{customText}</Text>;
}
