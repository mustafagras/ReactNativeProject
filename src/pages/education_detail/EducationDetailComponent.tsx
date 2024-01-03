import React from "react";
import { Image, ScrollView, View } from "react-native";
import { EducationDetailProps } from "../../types";
import { data } from "../../JSON/API/educationDetail";
import educationDetailStyle from "../../UI/styles/educationDetailStyle";
import CustomListCard from "../../components/listCard";

export default function EducationDetailComponent({
  isVisibleDesc,
  setIsVisibleDesc,
}: EducationDetailProps) {
  return (
    <View style={educationDetailStyle.container}>
      <Image style={educationDetailStyle.img} source={{ uri: data.image }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomListCard
          containerStyle={educationDetailStyle.textContainer}
          titleTextStyle={educationDetailStyle.title}
          timerTextStyle={educationDetailStyle.timer}
          descTextStyle={educationDetailStyle.desc}
          item={data}
          label={
            isVisibleDesc
              ? "app:educationList:notMore"
              : "app:educationList:moreSee"
          }
          isDetail={true}
          isMoreDetail={isVisibleDesc}
          onPress={() => setIsVisibleDesc(!isVisibleDesc)}
        />
      </ScrollView>
    </View>
  );
}
