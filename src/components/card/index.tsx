import React, { Children } from "react";
import { View, Image } from "react-native";
import { CustomCardProps } from "../../types";
import styles from "./cardStyle";

export default function CustomCard({
  item,
  containerStyle,
  imageStyle,
  children,
}: CustomCardProps) {
  return (
    <>
      <View
        style={
          containerStyle !== undefined ? containerStyle : styles.cardContainer
        }
      >
        <Image
          resizeMode="contain"
          style={imageStyle !== undefined ? imageStyle : styles.cardImage}
          source={{ uri: item.image }}
        />
      </View>
      {children}
    </>
  );
}
