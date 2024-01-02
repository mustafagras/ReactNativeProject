import React from "react";
import { View, Text } from "react-native";
import WhiteContainer from "../../components/whiteContainer";
import CustomText from "../../components/text";

export default function DashboardComponent() {
  return (
    <WhiteContainer>
      <CustomText tx={"app:home:title"} />
    </WhiteContainer>
  );
}
