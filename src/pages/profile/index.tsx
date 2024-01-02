import React from "react";
import ProfileComponent from "./ProfileComponent";
import { useAppStore } from "../../store/app";

export default function ProfileContainer() {
  const setIsLogin = useAppStore().setIsLogin;

  const onLogOut = () => {
    setIsLogin(false);
  };

  return <ProfileComponent onLogOut={onLogOut} />;
}
