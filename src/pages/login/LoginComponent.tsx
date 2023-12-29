import React from "react";
import { navigationPage } from "../../constants/navigationConstant";
import { LoginComponentProps } from "../../types";
import WhiteContainer from "../../components/whiteContainer";
import LogoImage from "../../components/logoImage";
import BoxContainer from "../../components/boxContainer";
import Input from "../../components/input";
import CustomButton from "../../components/button";
import { colors } from "../../UI/Color";

export default function LoginComponent(props: LoginComponentProps) {
  const { email, setEmail, password, setPassword, onNavigate } = props;
  const { LOGIN, REGISTER, FORGOT_PASSWORD } = navigationPage;

  return (
    <WhiteContainer>
      <LogoImage />
      <BoxContainer>
        <Input
          value={email}
          setValue={setEmail}
          placeHolder="Email"
          keyboardType="email-address"
        />
        <Input
          value={password}
          setValue={setPassword}
          placeHolder="Password"
          secureTextEntry={true}
          keyboardType="default"
        />
        <CustomButton
          tx="auth:signIn:login"
          color={colors.indianred}
          onPress={() => onNavigate(LOGIN)}
        />
        <CustomButton
          tx="auth:signUp:register"
          color={colors.lightseagreen}
          onPress={() => onNavigate(REGISTER)}
        />
        <CustomButton
          tx="auth:forgotPassword:forgotPassword"
          color={colors.black}
          onPress={() => onNavigate(FORGOT_PASSWORD)}
        />
      </BoxContainer>
    </WhiteContainer>
  );
}
