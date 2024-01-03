import React, { useState } from "react";
import { data } from "../../JSON/API/education";
import EducationListComponent from "./EducationListComponent";

export default function EducationListContainer() {
  const [lastData, setLastData] = useState<any>(data);
  const [searchText, setSearchText] = useState<string>("");

  const onSearch = (text: string) => {
    setSearchText(text);
    const tempData = data.filter((item) =>
      item.title.toLocaleUpperCase("tr").includes(text.toLocaleUpperCase("tr"))
    );
    setLastData(tempData);
  };

  const onDetail = () => {
    console.log("Detay Gör");
  };

  return (
    <EducationListComponent
      onSearch={onSearch}
      searchText={searchText}
      data={lastData}
      onDetail={onDetail}
    />
  );
}
