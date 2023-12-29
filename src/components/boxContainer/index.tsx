import React from "react";
import { View } from "react-native";
import { ChildrenProps } from "../../types";
import styles from "./boxContainerStyle";

export default function BoxContainer({ children }: ChildrenProps) {
  return <View style={styles.boxContainer}>{children}</View>;
}
