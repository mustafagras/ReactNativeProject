import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText, SignInText } from "../text";
import styles from "./buttonStyle";

interface CustomButtonProps {
  tx: string;
  onPress: () => void;
}

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
