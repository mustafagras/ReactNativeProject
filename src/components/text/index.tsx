import { Text, TextStyle, StyleProp } from "react-native";
import React from "react";
import tr from "../../JSON/tr";

// export default function CustomText({ tx }: { tx: string }) {

// interface CustomTextProps {
//   tx: string;
// }

type CustomTextProps = {
  tx: string;
  style: StyleProp<TextStyle>;
};

export default function SignInText({ tx, style }: CustomTextProps) {
  const lastText: any = tr[0].auth.signIn[tx];
  return <Text style={style}>{lastText}</Text>;
}
