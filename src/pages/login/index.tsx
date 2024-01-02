import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppStore } from "../../store/app";
import LoginComponent from "./LoginComponent";

export default function LoginContainer() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();
  const setIsLogin = useAppStore().setIsLogin;

  const onNavigate = (params: never) => {
    navigation.navigate(params);
  };

  const onLogin = () => {
    setIsLogin(true);
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
