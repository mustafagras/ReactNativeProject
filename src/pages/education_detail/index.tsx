import React, { useState } from "react";
import EducationDetailComponent from "./EducationDetailComponent";

export default function EducationDetailContainer() {
  const [isVisibleDesc, setIsVisibleDesc] = useState<boolean>(false);
  return (
    <EducationDetailComponent
      isVisibleDesc={isVisibleDesc}
      setIsVisibleDesc={setIsVisibleDesc}
    />
  );
}
