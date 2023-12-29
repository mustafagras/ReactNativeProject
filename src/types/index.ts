import { StyleProp, TextStyle } from "react-native";

export type ChildrenProps = {
  children: any;
};

export interface LoginComponentProps {
  email: string;
  password: string;
  setEmail: (params: string) => void;
  setPassword: (params: string) => void;
  onNavigate: (params: string) => void;
}

export type ForgotPasswordProps = {
  email: string;
  setEmail: (params: string) => void;
};

export interface CustomTextProps {
  tx: string;
  //   style: StyleProp<TextStyle> | undefined;
  style?: StyleProp<TextStyle>;
}

export interface CustomButtonProps {
  tx: string;
  onPress: () => void;
  color?: string;
}

export interface InputProps {
  secureTextEntry?: boolean;
  value: string;
  setValue: (params: string) => void;
  placeHolder: string;
  keyboardType?: any;
}
