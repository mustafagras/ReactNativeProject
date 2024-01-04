import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EducationDetailProps } from "../../types";
import { data } from "../../JSON/API/educationDetail";
import CustomListCard from "../../components/listCard";
import CustomText from "../../components/text";
import educationDetailStyle from "../../UI/styles/educationDetailStyle";

export default function EducationDetailComponent({
  isVisibleDesc,
  setIsVisibleDesc,
  accordionActive,
  setAccordionActive,
}: EducationDetailProps) {
  const Card = ({ item }) => {
    return (
      <View>
        <Text>{item.desc}</Text>
      </View>
    );
  };

  const Accordion = ({ item, index }) => {
    const { data, title } = item;
    return (
      <>
        <TouchableOpacity
          style={educationDetailStyle.titleButton}
          onPress={() =>
            accordionActive === index
              ? setAccordionActive(undefined)
              : setAccordionActive(index)
          }
        >
          <CustomText style={educationDetailStyle.accordionTitle} tx={title} />
        </TouchableOpacity>
        {accordionActive === index && (
          <View style={educationDetailStyle.dataContainer}>
            <FlatList data={data} renderItem={Card} />
          </View>
        )}
      </>
    );
  };

  const list = [
    {
      title: "app:educationList:lesson",
      data: data.lesson,
    },
    {
      title: "app:educationList:certificate",
      data: data.certificate,
    },
    {
      title: "app:educationList:career",
      data: data.career,
    },
  ];

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
        <View style={educationDetailStyle.accordionContainer}>
          <FlatList data={list} renderItem={Accordion} />
        </View>
      </ScrollView>
    </View>
  );
}
