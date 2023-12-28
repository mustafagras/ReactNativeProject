import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import loginStyle from "../../UI/styles/loginStyle";
import SignInText from "../../components/text";

export default function LoginComponent() {
  return (
    <View style={loginStyle.container}>
      <Image
        style={loginStyle.logo}
        resizeMode="contain"
        source={require("../../../assets/logo.png")}
      />
      <View style={loginStyle.subContainer}>
        <TextInput style={loginStyle.input} placeholder="Email" />
        <TextInput style={loginStyle.input} placeholder="Password" />
        <TouchableOpacity
          style={loginStyle.button}
          onPress={() => console.log("giris yap")}
        >
          <SignInText tx={"login"} style={loginStyle.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
