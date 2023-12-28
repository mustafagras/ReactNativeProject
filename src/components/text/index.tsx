import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import { CustomTextProps } from "../../type";
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

export { CustomText, AuthText, SignInText, SignUpText };
