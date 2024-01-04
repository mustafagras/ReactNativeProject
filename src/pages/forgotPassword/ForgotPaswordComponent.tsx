import React from "react";
import { ForgotPasswordComponentProps } from "../../types";
import WhiteContainer from "../../components/whiteContainer";
import LogoImage from "../../components/logoImage";
import BoxContainer from "../../components/boxContainer";
import Input from "../../components/input";
import CustomButton from "../../components/button";

export default function ForgotPaswordComponent({
  control,
  handleSubmit,
  errors,
  onForgotPassword,
}: ForgotPasswordComponentProps) {
  return (
    <WhiteContainer>
      <LogoImage />
      <BoxContainer>
        <Input
          name="email"
          control={control}
          placeHolder="auth:forgotPassword:email"
          keyboardType="email-address"
          errors={errors["email"]}
        />
        <Input
        name="newPassword"
        control={control}
        placeHolder="auth:forgotPassword:newPassword"
        keyboardType="default"
        errors={errors["newPassword"]}
      />
        <CustomButton
          tx="auth:forgotPassword:sendCode"
          color="red"
          onPress={() => handleSubmit(onForgotPassword)()}
        />
      </BoxContainer>
    </WhiteContainer>
  );
}
