import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { HomeProps } from "../../types";
import WhiteContainer from "../../components/whiteContainer";
import CustomCard from "../../components/card";
import homeStyle from "../../UI/styles/homeStyle";

export default function HomeComponent({
  sliderData,
  partners,
  stories,
  storiesRef,
  onLeft,
  onRight,
}: HomeProps) {
  const DragButton = ({ onPress, style, icon }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[homeStyle.iconButtonStyle, style]}
    >
      <Image style={homeStyle.icon} source={icon} />
    </TouchableOpacity>
  );

  return (
    <WhiteContainer>
      <View style={homeStyle.cardFlatlistStyle}>
        <FlatList
          data={sliderData}
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
      <View>
        <DragButton
          onPress={onLeft}
          style={homeStyle.leftIcon}
          icon={require("../../../assets/icons/left-arrow.png")}
        />
        <FlatList
          ref={storiesRef}
          data={stories}
          renderItem={({ item }) => (
            <View style={homeStyle.userContainer}>
              <CustomCard
                containerStyle={homeStyle.userImageContainer}
                imageStyle={homeStyle.userImage}
                item={item}
                children={
                  <View style={homeStyle.textContainer}>
                    <Text style={homeStyle.boldText}>{item.name}</Text>
                    <Text style={homeStyle.titleStyle}>{item.title}</Text>
                  </View>
                }
              />
            </View>
          )}
          horizontal={true}
        />
        <DragButton
          onPress={onRight}
          style={homeStyle.rightIcon}
          icon={require("../../../assets/icons/right-arrow.png")}
        />
      </View>
    </WhiteContainer>
  );
}
