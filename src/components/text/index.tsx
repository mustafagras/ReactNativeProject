import React from "react";
import { Text } from "react-native";
import { CustomTextProps } from "../../types";
import tr from "../../JSON/tr";

const CustomText = ({ tx, style }: CustomTextProps) => {
  const customText = tr[tx];
  return <Text style={style}>{customText}</Text>;
};

const AuthText = ({ tx, style }: CustomTextProps) => {
  const authText = tr[0].auth[tx];
  return <Text style={style}>{authText}</Text>;
};

const SignInText = ({ tx, style }: CustomTextProps) => {
  const signInText = tr[0].auth.signIn[tx];
  return <Text style={style}>{signInText}</Text>;
};

const SignUpText = ({ tx, style }: CustomTextProps) => {
  const signUpText = tr[0].auth.signUp[tx];
  return <Text style={style}>{signUpText}</Text>;
};

const ForgotPasswordText = ({ tx, style }: CustomTextProps) => {
  const forgotPasswordText = tr[0].auth.forgotPassword[tx];
  return <Text style={style}>{forgotPasswordText}</Text>;
};

export { CustomText, AuthText, SignInText, SignUpText, ForgotPasswordText };
