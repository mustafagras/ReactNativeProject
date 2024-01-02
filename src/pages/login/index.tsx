import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppSettings, useAppStore } from "../../store/app";
import LoginComponent from "./LoginComponent";

export default function LoginContainer() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();
  const setIsLogin = useAppStore().setIsLogin;

  const toggleLoader = useAppSettings().toggleLoader;
  const hideLoader = useAppSettings().hideLoader;

  const onNavigate = (params: never) => {
    toggleLoader();
    setTimeout(() => {
      hideLoader();
      navigation.navigate(params);
    }, 1000);
  };

  const onLogin = () => {
    toggleLoader();
    setTimeout(() => {
      hideLoader();
      setIsLogin(true);
    }, 1000);
  };

  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onNavigate={onNavigate}
      onLogin={onLogin}
    />
  );
}
