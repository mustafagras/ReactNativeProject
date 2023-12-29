import React from "react";
import { RegisterComponentProps } from "../../types";
import WhiteContainer from "../../components/whiteContainer";
import BoxContainer from "../../components/boxContainer";
import LogoImage from "../../components/logoImage";
import Input from "../../components/input";
import { TextInput } from "react-native-gesture-handler";

export default function RegisterComponent(props: RegisterComponentProps) {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    rePassword,
    setRePassword,
    isVisible,
    setIsVisible,
    isChecked,
    setIsChecked,
  } = props;
  return (
    <WhiteContainer>
      <LogoImage />
      <BoxContainer>
        <Input
          value={fullName}
          setValue={setFullName}
          placeHolder="auth:signUp:fullName"
        />
        <Input
          value={email}
          setValue={setEmail}
          placeHolder="auth:signUp:email"
          keyboardType="email-address"
        />
        <Input
          value={phone}
          setValue={setPhone}
          placeHolder="auth:signUp:phoneNumber"
          keyboardType="numeric"
        />
        <Input
          value={password}
          setValue={setPassword}
          placeHolder="auth:signUp:password"
          secureTextEntry={true}
        />
        <Input
          value={rePassword}
          setValue={setRePassword}
          placeHolder="auth:signUp:rePassword"
          secureTextEntry={true}
        />
      </BoxContainer>
    </WhiteContainer>
  );
}
