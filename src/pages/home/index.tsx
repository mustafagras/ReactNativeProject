import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import HomeComponent from "./HomeComponent";
import { successStories } from "../../JSON/API/home";
import { useAppSettings } from "../../store/app";
import {
  getPartnersData,
  getSliderData,
  getSuccessStoriesData,
} from "../../service";

export default function HomeContainer() {
  const [storiesIndex, setStoriesIndex] = useState<number>(0);
  const storiesRef = useRef<FlatList>();

  const [sliderData, setSliderData] = useState<any>();
  const [partners, setPartners] = useState<any>();
  const [stories, setStories] = useState<any>();
  const setLoader = useAppSettings().setLoader;

  useEffect(() => {
    setLoader(true);
    getDataFunc();
    return setLoader(false);
  }, []);

  const getDataFunc = async () => {
    getSliderData().then((sliderData) => {
      if (sliderData) {
        setSliderData(sliderData);
      }
    });
    getPartnersData().then((partners) => {
      if (partners) {
        setPartners(partners);
      }
    });
    getSuccessStoriesData().then((stories) => {
      if (stories) {
        setStories(stories);
      }
    });
  };

  const onLeft = () => {
    if (storiesIndex > 0) {
      storiesRef.current.scrollToIndex({
        index: storiesIndex - 1,
      });
      setStoriesIndex(storiesIndex - 1);
    }
  };

  const onRight = () => {
    if (storiesIndex !== successStories.length - 1) {
      storiesRef.current.scrollToIndex({
        index: storiesIndex + 1,
      });
      setStoriesIndex(storiesIndex + 1);
    }
  };

  return (
    <HomeComponent
      sliderData={sliderData}
      partners={partners}
      stories={stories}
      onLeft={onLeft}
      onRight={onRight}
      storiesRef={storiesRef}
    />
  );
}
