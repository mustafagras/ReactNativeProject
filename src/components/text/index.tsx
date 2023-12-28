import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import tr from "../../JSON/tr";

// export default function CustomText({ tx }: { tx: string }) {

// interface CustomTextProps {
//   tx: string;
// }

type CustomTextProps = {
  tx: string;
  //   style: StyleProp<TextStyle> | undefined;
  style?: StyleProp<TextStyle>;
};

const CustomText = ({ tx, style }: CustomTextProps) => {
  const customText: any = tr[tx];
  return <Text style={style}>{customText}</Text>;
};

const AuthText = ({ tx, style }: CustomTextProps) => {
  const authText: any = tr[0].auth[tx];
  return <Text style={style}>{authText}</Text>;
};

const SignInText = ({ tx, style }: CustomTextProps) => {
  const signInText: any = tr[0].auth.signIn[tx];
  return <Text style={style}>{signInText}</Text>;
};

const SignUpText = ({ tx, style }: CustomTextProps) => {
  const signUpText: any = tr[0].auth.signUp[tx];
  return <Text style={style}>{signUpText}</Text>;
};

export { AuthText, CustomText, SignInText, SignUpText };
