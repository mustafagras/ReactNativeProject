import React from "react";
import { ForgotPasswordProps } from "../../types";
import WhiteContainer from "../../components/whiteContainer";
import LogoImage from "../../components/logoImage";
import BoxContainer from "../../components/boxContainer";
import Input from "../../components/input";
import CustomButton from "../../components/button";

export default function ForgotPaswordComponent({
  email,
  setEmail,
}: ForgotPasswordProps) {
  return (
    <WhiteContainer>
      <LogoImage />
      <BoxContainer>
        <Input
          value={email}
          setValue={setEmail}
          placeHolder="auth:forgotPassword:email"
          keyboardType="email-address"
        />
        <CustomButton
          tx="auth:forgotPassword:sendCode"
          color="red"
          onPress={() => console.log("kod gönder")}
        />
      </BoxContainer>
    </WhiteContainer>
  );
}
