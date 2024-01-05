import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSettings, useAppStore } from "../../store/app";
import { onLoginService } from "../../service";
import LoginComponent from "./LoginComponent";

const schema = z.object({
  email: z.coerce
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .trim()
    .email("Lütfen geçerli bir mail adresi giriniz"),
  password: z.coerce
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .trim()
    .min(6, { message: "Şifreniz en az 6 karakter olmalıdır" }),
});

export default function LoginContainer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

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

  const onLogin = (data) => {
    toggleLoader();
    onLoginService().then((res) => {
      hideLoader();
      if (res) {
        const users = Object.values(res);
        const user = users.find((user) => user.email === data.email);
        if (user) {
          if (user.password === data.password) {
            setIsLogin(true);
          } else {
            Alert.alert("Şifrenizi kontrol edin!");
          }
        } else {
          Alert.alert("Kullanıcı bulunamadı!");
        }
      }
    });
  };

  return (
    <LoginComponent
      onNavigate={onNavigate}
      onLogin={onLogin}
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
}
