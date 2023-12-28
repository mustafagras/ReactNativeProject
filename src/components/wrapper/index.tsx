import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomSafeAreaProps } from "../../type";
import styles from "./safeAreaStyle";

export default function CustomSafeAreaView({ children }: CustomSafeAreaProps) {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
}
