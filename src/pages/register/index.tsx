import React, { useState } from "react";
import RegisterComponent from "./RegisterComponent";

export default function RegisterContainer() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onModal = () => {
    setIsChecked(true);
    setIsVisible(false);
  };

  return (
    <RegisterComponent
      fullName={fullName}
      setFullName={setFullName}
      email={email}
      setEmail={setEmail}
      phone={phone}
      setPhone={setPhone}
      password={password}
      setPassword={setPassword}
      rePassword={rePassword}
      setRePassword={setRePassword}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      isChecked={isChecked}
      onModal={onModal}
    />
  );
}
