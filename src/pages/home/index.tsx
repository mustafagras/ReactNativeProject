import React, { useRef, useState } from "react";
import { FlatList } from "react-native";
import HomeComponent from "./HomeComponent";
import { successStories } from "../../JSON/API/home";

export default function HomeContainer() {
  const [storiesIndex, setStoriesIndex] = useState<number>(0);
  const storiesRef = useRef<FlatList>();

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
    <HomeComponent onLeft={onLeft} onRight={onRight} storiesRef={storiesRef} />
  );
}
