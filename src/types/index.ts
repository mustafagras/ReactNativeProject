import { StyleProp, TextStyle } from "react-native";

export interface LoginComponentProps {
  email: string;
  password: string;
  setEmail: (params: string) => void;
  setPassword: (params: string) => void;
}

export interface CustomButtonProps {
  tx: string;
  onPress: () => void;
}

export interface CustomTextProps {
  tx: string;
  //   style: StyleProp<TextStyle> | undefined;
  style?: StyleProp<TextStyle>;
}

export type CustomSafeAreaProps = {
  children: JSX.Element;
};
