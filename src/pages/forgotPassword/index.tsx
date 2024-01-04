import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSettings } from "../../store/app";
import {
  getForgotPasswordService,
  onForgotPasswordService,
} from "../../service";
import ForgotPaswordComponent from "./ForgotPaswordComponent";

const schema = z.object({
  email: z
    .string({ required_error: "Geçerli bir karakter girin!" })
    .email("Email formatında olmak zorundadır!"),
  newPassword: z
    .string({ required_error: "Geçerli bir karakter girin!" })
    .min(6, "Şifre en az 6 karakterden oluşmalıdır!"),
});

export default function ForgotPasswordContainer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const navigation = useNavigation();
  const toggleLoader = useAppSettings().toggleLoader;
  const hideLoader = useAppSettings().hideLoader;

  const onForgotPassword = (data) => {
    toggleLoader();
    getForgotPasswordService().then((res) => {
      if (res) {
        const users = Object.values(res);
        const user = users.find((item) => item.email === data.email);

        if (user) {
          const keys = Object.keys(res);
          const userKey = keys.filter(
            (item) => res[item].email === data.email && item
          )?.[0];
          onForgotPasswordService({ password: data.newPassword }, userKey).then(
            (subRes) => {
              hideLoader();
              if (subRes) {
                Alert.alert("Şifre değiştirildi");
                navigation.goBack();
              }
            }
          );
        } else {
          hideLoader();
          Alert.alert("Kullanıcı bulunamadı!");
        }
      }
    });
  };

  return (
    <ForgotPaswordComponent
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onForgotPassword={onForgotPassword}
    />
  );
}
