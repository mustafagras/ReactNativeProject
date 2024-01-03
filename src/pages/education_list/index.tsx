import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { navigationPage } from "../../constants/navigationConstant";
import { useAppSettings } from "../../store/app";
import { getEducationList } from "../../service";
import EducationListComponent from "./EducationListComponent";

export default function EducationListContainer() {
  const { navigate } = useNavigation();
  const { EDUCATION_DETAIL } = navigationPage;

  const [data, setData] = useState<any>();
  const [lastData, setLastData] = useState<any>(data);
  const [searchText, setSearchText] = useState<string>("");
  const toggleLoader = useAppSettings().toggleLoader;
  const hideLoader = useAppSettings().hideLoader;

  useEffect(() => {
    getDataFunc();
  }, []);

  const getDataFunc = () => {
    toggleLoader();
    getEducationList().then((lastData) => {
      hideLoader();
      if (lastData) {
        setData(lastData);
        setLastData(lastData);
      }
    });
  };

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
