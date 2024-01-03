import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { EventListProps } from "../../types";
import { threeDot, titleMax } from "../../constants/formatString";
import Search from "../../components/search";
import CustomTextButton from "../../components/textButton";
import EmptyComponent from "../../components/emptyComponent";
import eventStyle from "../../UI/styles/eventStyle";

export default function EventListComponent({
  data,
  searchText,
  onSearch,
  onDetail,
}: EventListProps) {
  const Card = ({ item }) => (
    <View style={eventStyle.card}>
      <Image
        resizeMode="contain"
        style={eventStyle.img}
        source={{ uri: item.image }}
      />
      <View style={eventStyle.textContainer}>
        <Text style={eventStyle.title}>
          {item.title
            .substring(0, titleMax)
            .concat(item.title.length > titleMax ? threeDot : "")}
        </Text>
        {item?.date && <Text style={eventStyle.smallText}>{item.date}</Text>}
        {item?.location && (
          <Text style={eventStyle.smallText}>{item.location}</Text>
        )}
        <CustomTextButton label="app:eventList:detailSee" onPress={onDetail} />
      </View>
    </View>
  );
  return (
    <View style={eventStyle.container}>
      <Search
        value={searchText}
        onChangeText={onSearch}
        placeHolder="app:eventList:findButton"
      />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={Card}
        ListEmptyComponent={() => <EmptyComponent text={searchText} />}
      />
    </View>
  );
}
