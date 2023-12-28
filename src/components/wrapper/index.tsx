import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChildrenProps } from "../../types";
import styles from "./safeAreaStyle";

export default function CustomSafeAreaView({ children }: ChildrenProps) {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
}
