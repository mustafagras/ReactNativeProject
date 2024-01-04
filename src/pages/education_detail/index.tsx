import React, { useState } from "react";
import EducationDetailComponent from "./EducationDetailComponent";

export default function EducationDetailContainer() {
  const [isVisibleDesc, setIsVisibleDesc] = useState<boolean>(false);
  const [accordionActive, setAccordionActive] = useState<number>(undefined);
  return (
    <EducationDetailComponent
      isVisibleDesc={isVisibleDesc}
      setIsVisibleDesc={setIsVisibleDesc}
      accordionActive={accordionActive}
      setAccordionActive={setAccordionActive}
    />
  );
}
