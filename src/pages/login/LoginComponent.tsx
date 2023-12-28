import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import loginStyle from "../../UI/styles/loginStyle";

export default function LoginComponent() {
  return (
    <View style={loginStyle.container}>
      <Image
        style={loginStyle.logo}
        resizeMode="contain"
        source={require("../../../assets/logo.png")}
      />
      <View style={loginStyle.subContainer}>
        <TextInput style={loginStyle.input} placeholder="Email">
          Email
        </TextInput>
        <TextInput style={loginStyle.input} placeholder="Password">
          Şifre
        </TextInput>
        <TouchableOpacity
          style={loginStyle.button}
          onPress={() => console.log("giris yap")}
        >
          <Text style={loginStyle.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
