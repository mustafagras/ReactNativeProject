import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./CustomSafeAreaStyle";

export default function CustomSafeAreaView({
  children,
}: {
  children: JSX.Element;
}) {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
}
