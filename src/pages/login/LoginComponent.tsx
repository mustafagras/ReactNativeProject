import React from "react";
import { View, TextInput, Image } from "react-native";
import { SignInButton } from "../../components/button";
import { LoginComponentProps } from "../../types";
import loginStyle from "../../UI/styles/loginStyle";
import WhiteContainer from "../../components/whiteContainer";

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
        <SignInButton tx={"login"} onPress={() => console.log("Giris")} />
      </View>
    </WhiteContainer>
  );
}
