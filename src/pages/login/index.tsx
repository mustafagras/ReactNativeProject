import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import { useNavigation } from "@react-navigation/native";

export default function LoginContainer() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();

  const onNavigate = (params: string) => {
    navigation.navigate(params);
  };

  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onNavigate={onNavigate}
    />
  );
}
