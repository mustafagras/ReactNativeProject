import React from "react";
import { View, Text } from "react-native";
import { CustomListCardProps } from "../../types";
import { descMax, threeDot, titleMax } from "../../constants/formatString";
import CustomTextButton from "../textButton";
import styles from "./listCardStyle";

export default function CustomListCard({
  item,
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
        {item.title
          .substring(0, titleMax)
          .concat(item.title.length > titleMax ? threeDot : "")}
      </Text>
      <Text
        style={timerTextStyle !== undefined ? timerTextStyle : styles.timer}
      >
        Eğitimin Süresi: {item.timer} saat
      </Text>
      <Text style={descTextStyle !== undefined ? descTextStyle : styles.desc}>
        {item.desc
          .substring(0, descMax)
          .concat(item.desc.length > descMax ? threeDot : "")}
      </Text>
      <CustomTextButton label="app:educationList:detailSee" onPress={onPress} />
    </View>
  );
}
