import { LegacyRef } from "react";
import {
  FlatList,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export type ChildrenProps = {
  children: any;
};

export interface StoreType {
  isLogin: boolean;
  setIsLogin: (params: boolean) => void;
}

export interface LoginComponentProps {
  email: string;
  password: string;
  setEmail: (params: string) => void;
  setPassword: (params: string) => void;
  onNavigate: (params: string) => void;
  onLogin: () => void;
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

export interface HomeProps {
  storiesRef: LegacyRef<FlatList>;
  onRight: () => void;
  onLeft: () => void;
}

export interface EducationListProps {
  onSearch: (params: string) => void;
  searchText: string;
  data: any;
  onDetail: () => void;
}

export interface EducationDetailProps {
  isVisibleDesc: boolean;
  setIsVisibleDesc: (params: boolean) => void;
}

export type EventListProps = {
  searchText: string;
  onSearch: (params: string) => void;
  data: any;
  onDetail: () => void;
};

export type EventDetailsProps = {};

export interface ProfileProps {
  onLogOut: () => void;
}

export type SearchProps = {
  placeHolder: string;
  value: string;
  onChangeText: (params: string) => void;
};

export type EmptyProps = {
  text: string;
};

export interface CustomTextProps {
  tx: string;
  //   style: StyleProp<TextStyle> | undefined;
  style?: StyleProp<TextStyle>;
  children?: string;
}

export interface CustomButtonProps {
  tx: string;
  onPress: () => void;
  color?: string;
}

export interface CustomCheckBoxProps {
  tx: string;
  checked: boolean;
  onPress: () => void;
}

export interface InputProps {
  secureTextEntry?: boolean;
  value?: string | number;
  setValue: (params?: string | number) => void;
  placeHolder: string;
  keyboardType?: any;
}

export interface CustomCardProps {
  item: any;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  children?: JSX.Element;
}

export interface CustomListCardProps {
  containerStyle?: StyleProp<ViewStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  timerTextStyle?: StyleProp<TextStyle>;
  descTextStyle?: StyleProp<TextStyle>;
  item: any;
  label: string;
  isDetail: boolean;
  isMoreDetail?: boolean;
  onPress: () => void;
}

export type CustomTextButtonProps = {
  label: string;
  onPress: () => void;
};
