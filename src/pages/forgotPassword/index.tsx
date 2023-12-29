import React, { useState } from "react";
import ForgotPaswordComponent from "./ForgotPaswordComponent";

export default function ForgotPasswordContainer() {
  const [email, setEmail] = useState<string>("");
  return <ForgotPaswordComponent email={email} setEmail={setEmail} />;
}
