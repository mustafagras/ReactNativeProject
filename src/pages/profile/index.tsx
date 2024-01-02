import React from "react";
import ProfileComponent from "./ProfileComponent";
import { useAppSettings, useAppStore } from "../../store/app";

export default function ProfileContainer() {
  const setIsLogin = useAppStore().setIsLogin;

  const toggleLoader = useAppSettings().toggleLoader;
  const hideLoader = useAppSettings().hideLoader;

  const onLogOut = () => {
    toggleLoader();
    setTimeout(() => {
      hideLoader();
      setIsLogin(false);
    }, 1000);
  };

  return <ProfileComponent onLogOut={onLogOut} />;
}
