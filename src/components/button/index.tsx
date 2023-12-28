import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText, SignInText } from "../text";
import { CustomButtonProps } from "../../types";
import styles from "./buttonStyle";

const CustomButton = ({ tx, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <CustomText tx={tx} style={styles.buttonText} />
    </TouchableOpacity>
  );
};

const SignInButton = ({ tx, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <SignInText tx={tx} style={styles.buttonText} />
    </TouchableOpacity>
  );
};

export { CustomButton, SignInButton };
