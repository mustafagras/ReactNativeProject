import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ProfileProps } from "../../types";
import { data } from "../../JSON/API/user";
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
        <Text style={profileStyle.title}>{data.name}</Text>
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
          <CustomText tx="auth:signOut:email">{data.email}</CustomText>
          <CustomText tx="auth:signOut:phone">{data.phone}</CustomText>
          <CustomText tx="auth:signOut:address">{data.address}</CustomText>
        </View>
        <View>
          <MapView
            initialRegion={{
              latitude: data.coord.lat,
              longitude: data.coord.long,
              latitudeDelta: 0.0522,
              longitudeDelta: 0.0321,
            }}
            style={profileStyle.mapViewStyle}
          >
            <Marker
              coordinate={{
                latitude: data.coord.lat,
                longitude: data.coord.long,
              }}
            />
          </MapView>
        </View>
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
