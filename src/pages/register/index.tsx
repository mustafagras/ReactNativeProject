import React, { useState } from "react";
import { Alert } from "react-native";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSettings } from "../../store/app";
import { onRegister } from "../../service";
import RegisterComponent from "./RegisterComponent";

const schema = z.object({
  fullName: z.string({ required_error: "Geçersiz karakter girdiniz" }),
  email: z
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .email("Email formatında değil"),
  phone: z.string({ required_error: "Telefon numarası sayılardan oluşmalı" }),
  password: z
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .min(6, "Şifreniz en az 6 karakter olmalıdır"),
  rePassword: z
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .min(6, "Şifreniz en az 6 karakter olmalıdır"),
});

export default function RegisterContainer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const toggleLoader = useAppSettings().toggleLoader;
  const hideLoader = useAppSettings().hideLoader;

  const onModal = () => {
    setIsChecked(true);
    setIsVisible(false);
  };

  const onSubmit = (data) => {
    toggleLoader();
    if (data.password === data.password) {
      onRegister(data).then((res) => {
        hideLoader();
        if (res) {
          Alert.alert("kayıt başarılı");
        }
      });
    } else {
      Alert.alert("Şifre doğrulanmadı");
      hideLoader();
    }
  };

  return (
    <RegisterComponent
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      isChecked={isChecked}
      onModal={onModal}
      handleSubmit={handleSubmit}
      control={control}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
}
