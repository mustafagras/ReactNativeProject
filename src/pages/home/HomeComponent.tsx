import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { data, partners } from "../../JSON/API/home";
import WhiteContainer from "../../components/whiteContainer";
import homeStyle from "../../UI/styles/homeStyle";
import CustomCard from "../../components/card";

export default function HomeComponent() {
  return (
    <WhiteContainer>
      <View style={homeStyle.cardFlatlistStyle}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => <CustomCard item={item} />}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
      </View>
      <View style={homeStyle.partnerFlastlistStyle}>
        <FlatList
          columnWrapperStyle={homeStyle.columnWrapperStyle}
          numColumns={3}
          data={partners}
          renderItem={({ item }) => (
            <CustomCard
              containerStyle={homeStyle.partnerContainer}
              imageStyle={homeStyle.partnerImage}
              item={item}
            />
          )}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </WhiteContainer>
  );
}
