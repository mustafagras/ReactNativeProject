import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import loginStyle from "../../UI/styles/loginStyle";
import SignInText from "../../components/text";

interface LoginComponentProps {
  email: string;
  password: string;
  setEmail: (params: string) => void;
  setPassword: (params: string) => void;
}

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
          secureTextEntry={true}
          style={loginStyle.input}
          placeholder="Password"
        />
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
