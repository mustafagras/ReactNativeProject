import React from "react";
import { FlatList, View } from "react-native";
import { EducationListProps } from "../../types";
import Search from "../../components/search";
import CustomListCard from "../../components/listCard";
import EmptyComponent from "../../components/emptyComponent";
import educationStyle from "../../UI/styles/educationStyle";

export default function EducationListComponent({
  searchText,
  onSearch,
  data,
  onDetail,
}: EducationListProps) {
  return (
    <View style={educationStyle.container}>
      <Search
        value={searchText}
        onChangeText={onSearch}
        placeHolder="app:educationList:findButton"
      />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CustomListCard item={item} onPress={onDetail} />
        )}
        ListEmptyComponent={() => <EmptyComponent text={searchText} />}
      />
    </View>
  );
}
