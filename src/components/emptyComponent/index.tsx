import React from "react";
import { Text, Image } from "react-native";
import { EmptyProps } from "../../types";
import WhiteContainer from "../whiteContainer";
import styles from "./emptyComponentStyle";

export default function EmptyComponent({ text }: EmptyProps) {
  return (
    <WhiteContainer>
      <Text style={styles.sorryText}>Üzgünüm...</Text>
      <Text style={styles.text}>"{text}" ile ilgili içerik bulunamadı.</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/icons/not-found.png")}
      />
    </WhiteContainer>
  );
}
