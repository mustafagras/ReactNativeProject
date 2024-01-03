import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { navigationPage } from "../../constants/navigationConstant";
import { useAppSettings } from "../../store/app";
import { getEventList } from "../../service";
import EventListComponent from "./EventListComponent";

export default function EventListContainer() {
  const { navigate } = useNavigation();
  const { EVENT_DETAIL } = navigationPage;

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
    getEventList().then((lastData) => {
      hideLoader();
      if (lastData) {
        setData(lastData);
        setLastData(lastData);
      }
    });
  };

  const onSearch = (text: string) => {
    setSearchText(text);
    const tempList = data.filter((item) =>
      item.title.toLocaleLowerCase("tr").includes(text.toLocaleLowerCase("tr"))
    );
    setLastData(tempList);
  };

  const onDetail = () => {
    navigate(EVENT_DETAIL);
  };
  return (
    <EventListComponent
      data={lastData}
      searchText={searchText}
      onSearch={onSearch}
      onDetail={onDetail}
    />
  );
}
