import React from "react";
import { View, TextInput, Image } from "react-native";
import {
  ForgotPasswordButton,
  SignInButton,
  SignUpButton,
} from "../../components/button";
import { LoginComponentProps } from "../../types";
import loginStyle from "../../UI/styles/loginStyle";
import WhiteContainer from "../../components/whiteContainer";
import { colors } from "../../UI/Color";

export default function LoginComponent(props: LoginComponentProps) {
  const { email, setEmail, password, setPassword } = props;

  return (
    <WhiteContainer>
      <Image
        style={loginStyle.logo}
        resizeMode="contain"
        source={require("../../../assets/logo.png")}
      />
      <View style={loginStyle.subContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={loginStyle.input}
          placeholder="Email"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          keyboardType="default"
          secureTextEntry={true}
          style={loginStyle.input}
          placeholder="Password"
        />
        <SignInButton
          tx={"login"}
          color={colors.indianred}
          onPress={() => console.log("Giris")}
        />
        <SignUpButton
          tx={"register"}
          color={colors.lightseagreen}
          onPress={() => console.log("Kaydol")}
        />
        <ForgotPasswordButton
          tx={"forgotPassword"}
          color={colors.black}
          onPress={() => console.log("Şifremi Unuttum")}
        />
      </View>
    </WhiteContainer>
  );
}
