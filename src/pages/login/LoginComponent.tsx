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
  const { onNavigate, onLogin, handleSubmit, control, errors } = props;
  const { REGISTER, FORGOT_PASSWORD } = navigationPage;

  return (
    <WhiteContainer>
      <LogoImage />
      <BoxContainer>
        <Input
          name="email"
          control={control}
          placeHolder="auth:signIn:email"
          keyboardType="email-address"
          errors={errors["email"]}
        />
        <Input
          name="password"
          control={control}
          placeHolder="auth:signIn:password"
          secureTextEntry={true}
          keyboardType="default"
          errors={errors["password"]}
        />
        <CustomButton
          tx="auth:signIn:login"
          color={colors.indianRed}
          onPress={() => handleSubmit(onLogin)()}
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
