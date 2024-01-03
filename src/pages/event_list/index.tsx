import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { navigationPage } from "../../constants/navigationConstant";
import EventListComponent from "./EventListComponent";
import { data } from "../../JSON/API/event";

export default function EventListContainer() {
  const [searchText, setSearchText] = useState<string>("");
  const [lastData, setLastData] = useState<any>(data);
  const { navigate } = useNavigation();
  const { EVENT_DETAIL } = navigationPage;

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
