import React from "react";
import { useAppSettings, useAppStore } from "../../store/app";
import ProfileComponent from "./ProfileComponent";

export default function ProfileContainer() {
  const setIsLogin = useAppStore().setIsLogin;
  const user = useAppStore().user;

  const toggleLoader = useAppSettings().toggleLoader;
  const hideLoader = useAppSettings().hideLoader;

  const onLogOut = () => {
    toggleLoader();
    setTimeout(() => {
      hideLoader();
      setIsLogin(false);
    }, 1000);
  };

  return <ProfileComponent user={user} onLogOut={onLogOut} />;
}
