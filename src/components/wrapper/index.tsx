import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./safeAreaStyle";

export default function CustomSafeAreaView({
  children,
}: {
  children: JSX.Element;
}) {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
}
