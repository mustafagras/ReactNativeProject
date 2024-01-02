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
  const { email, setEmail, password, setPassword, onNavigate, onLogin } = props;
  const { REGISTER, FORGOT_PASSWORD } = navigationPage;

  return (
    <WhiteContainer>
      <LogoImage />
      <BoxContainer>
        <Input
          value={email}
          setValue={setEmail}
          placeHolder="auth:signIn:email"
          keyboardType="email-address"
        />
        <Input
          value={password}
          setValue={setPassword}
          placeHolder="auth:signIn:password"
          secureTextEntry={true}
          keyboardType="default"
        />
        <CustomButton
          tx="auth:signIn:login"
          color={colors.indianRed}
          onPress={onLogin}
        />
        <CustomButton
          tx="auth:signIn:register"
          color={colors.lightSeaGreen}
          onPress={() => onNavigate(REGISTER)}
        />
        <CustomButton
          tx="auth:signIn:forgotButton"
          color={colors.black}
          onPress={() => onNavigate(FORGOT_PASSWORD)}
        />
      </BoxContainer>
    </WhiteContainer>
  );
}
