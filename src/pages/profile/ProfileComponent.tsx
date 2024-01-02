import React from "react";
import { View, Text, Image } from "react-native";
import { ProfileProps } from "../../types";
import CustomButton from "../../components/button";
import CustomText from "../../components/text";
import profileStyle from "../../UI/styles/profileStyle";

export default function ProfileComponent({ onLogOut }: ProfileProps) {
  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.redContainer}>
        <View style={[profileStyle.opacityRed, profileStyle.circle1]}></View>
        <View style={[profileStyle.opacityRed, profileStyle.circle2]}></View>
        <View style={[profileStyle.opacityRed, profileStyle.circle3]}></View>
        <Text>Profile Name</Text>
      </View>
      <View style={profileStyle.userContainer}>
        <Image
          resizeMode="contain"
          style={profileStyle.img}
          source={require("../../../assets/img/user.jpg")}
        />
      </View>
      <View style={profileStyle.subContainer}>
        <View style={profileStyle.infoContainer}>
          <CustomText tx="auth:signOut:email"></CustomText>
          <CustomText tx="auth:signOut:phone"></CustomText>
          <CustomText tx="auth:signOut:address"></CustomText>
        </View>
        <View></View>
        <View style={profileStyle.buttonContainer}>
          <CustomButton
            tx="auth:signOut:logout"
            onPress={onLogOut}
            color="red"
          />
        </View>
      </View>
    </View>
  );
}
