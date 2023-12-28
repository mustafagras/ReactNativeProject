import { View } from "react-native";
import React from "react";
import { ChildrenProps } from "../../types";
import styles from "./whiteContainerStyle";

export default function WhiteContainer({ children }: ChildrenProps) {
  return <View style={styles.container}>{children}</View>;
}
