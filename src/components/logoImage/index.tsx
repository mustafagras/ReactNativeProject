import React from "react";
import { Image } from "react-native";
import styles from "./logoImageStyle";

export default function LogoImage() {
  return (
    <Image
      style={styles.logo}
      resizeMode="contain"
      source={require("../../../assets/logo.png")}
    />
  );
}
