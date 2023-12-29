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

export interface RegisterComponentProps {
  fullName: string;
  setFullName: (params: string) => void;
  email: string;
  setEmail: (params: string) => void;
  phone?: number;
  setPhone: (params: number) => void;
  password: string;
  setPassword: (params: string) => void;
  rePassword: string;
  setRePassword: (params: string) => void;
  isVisible: boolean;
  setIsVisible: (params: boolean) => void;
  isChecked: boolean;
  onModal: () => void;
}

export type ForgotPasswordComponentProps = {
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

export interface CustomCheckBoxProps {
  tx: string;
  checked: boolean;
}

export interface InputProps {
  secureTextEntry?: boolean;
  value?: string | number;
  setValue: (params?: string | number) => void;
  placeHolder: string;
  keyboardType?: any;
}
