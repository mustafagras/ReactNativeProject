import React, { useState } from "react";
import { Alert } from "react-native";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSettings } from "../../store/app";
import { onRegister } from "../../service";
import RegisterComponent from "./RegisterComponent";

const schema = z.object({
  fullName: z.coerce
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .trim()
    .min(1, { message: "Bu alan zorunludur" }),
  email: z.coerce
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .trim()
    .email("Lütfen geçerli bir mail adresi giriniz"),
  phone: z.coerce
    .number({
      required_error: "Geçersiz karakter girdiniz",
      invalid_type_error: "Telefon numarası sayılardan oluşmalı",
    })
    .min(1, { message: "Bu alan zorunludur" }),
  password: z.coerce
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .trim()
    .min(6, { message: "Şifreniz en az 6 karakter olmalıdır" }),
  rePassword: z.coerce
    .string({ required_error: "Geçersiz karakter girdiniz" })
    .trim()
    .min(6, { message: "Şifreniz en az 6 karakter olmalıdır" }),
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
