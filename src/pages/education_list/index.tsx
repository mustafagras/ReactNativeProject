import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { data } from "../../JSON/API/education";
import EducationListComponent from "./EducationListComponent";
import { navigationPage } from "../../constants/navigationConstant";

export default function EducationListContainer() {
  const [lastData, setLastData] = useState<any>(data);
  const [searchText, setSearchText] = useState<string>("");
  const { navigate } = useNavigation();
  const { EDUCATION_DETAIL } = navigationPage;

  const onSearch = (text: string) => {
    setSearchText(text);
    const tempData = data.filter((item) =>
      item.title.toLocaleUpperCase("tr").includes(text.toLocaleUpperCase("tr"))
    );
    setLastData(tempData);
  };

  const onDetail = () => {
    navigate(EDUCATION_DETAIL);
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
