import React, { useState } from "react";
import { View, Text } from "react-native";
import { CustomListCardProps } from "../../types";
import {
  descMax,
  detailDescMax,
  threeDot,
  titleMax,
} from "../../constants/formatString";
import CustomTextButton from "../textButton";
import styles from "./listCardStyle";

export default function CustomListCard({
  item,
  label,
  isDetail,
  isMoreDetail,
  onPress,
  containerStyle,
  titleTextStyle,
  timerTextStyle,
  descTextStyle,
}: CustomListCardProps) {
  return (
    <View
      style={
        containerStyle !== undefined ? containerStyle : styles.cardContainer
      }
    >
      <Text
        style={titleTextStyle !== undefined ? titleTextStyle : styles.title}
      >
        {!isDetail
          ? item.title
              .substring(0, titleMax)
              .concat(item.title.length > titleMax ? threeDot : "")
          : item.title}
      </Text>
      <Text
        style={timerTextStyle !== undefined ? timerTextStyle : styles.timer}
      >
        Eğitimin Süresi: {item.timer} saat
      </Text>
      <Text style={descTextStyle !== undefined ? descTextStyle : styles.desc}>
        {!isDetail &&
          item.desc
            .substring(0, descMax)
            .concat(item.desc.length > descMax ? threeDot : "")}
        {isDetail &&
          (isMoreDetail
            ? item.desc
            : item.desc
                .substring(0, detailDescMax)
                .concat(item.desc.length > detailDescMax ? threeDot : ""))}
      </Text>
      <CustomTextButton label={label} onPress={onPress} />
    </View>
  );
}
