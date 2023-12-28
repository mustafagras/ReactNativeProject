import React, { useState } from "react";
import LoginComponent from "./LoginComponent";

export default function LoginContainer() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}
