import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { SignInButton } from "../../components/button";
import { LoginComponentProps } from "../../type";
import loginStyle from "../../UI/styles/loginStyle";

export default function LoginComponent(props: LoginComponentProps) {
  const { email, setEmail, password, setPassword } = props;

  return (
    <View style={loginStyle.container}>
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
    </View>
  );
}
