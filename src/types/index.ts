import { LegacyRef } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
} from "react-hook-form";
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
  onNavigate: (params: string) => void;
  onLogin: (params: any) => void;
  control: Control;
  errors: FieldErrors;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export interface RegisterComponentProps {
  isVisible: boolean;
  setIsVisible: (params: boolean) => void;
  isChecked: boolean;
  onModal: () => void;
  onSubmit: (data: any) => void;
  control: Control;
  errors: FieldErrors;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export type ForgotPasswordComponentProps = {
  onForgotPassword: (data: any) => void;
  control: Control;
  errors: FieldErrors;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
};

export interface HomeProps {
  sliderData: any | boolean;
  partners: any | boolean;
  stories: any | boolean;
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
  accordionActive?: number;
  setAccordionActive: (params: number) => void;
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
  placeHolder: string;
  keyboardType?: any;
  control: any;
  name: string | number;
  errors: any;
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
