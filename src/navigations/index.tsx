import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAppStore } from "../store/app";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

export default function MainNavigation() {
  // const [isLogin, setIsLogin] = useState<boolean>(false);
  const isLogin = useAppStore().isLogin;

  return (
    <NavigationContainer>
      {isLogin ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
