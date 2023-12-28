import React from "react";
import { TouchableOpacity } from "react-native";
import {
  CustomText,
  ForgotPasswordText,
  SignInText,
  SignUpText,
} from "../text";
import { CustomButtonProps } from "../../types";
import styles from "./buttonStyle";

const CustomButton = ({ tx, color, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={() => onPress()}
    >
      <CustomText tx={tx} style={styles.buttonText} />
    </TouchableOpacity>
  );
};

const SignInButton = ({ tx, color, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={onPress}
    >
      <SignInText tx={tx} style={styles.buttonText} />
    </TouchableOpacity>
  );
};

const SignUpButton = ({ tx, color, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={onPress}
    >
      <SignUpText tx={tx} style={styles.buttonText} />
    </TouchableOpacity>
  );
};

const ForgotPasswordButton = ({ tx, color, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={onPress}
    >
      <ForgotPasswordText tx={tx} style={styles.buttonText} />
    </TouchableOpacity>
  );
};

export { CustomButton, SignInButton, SignUpButton, ForgotPasswordButton };
