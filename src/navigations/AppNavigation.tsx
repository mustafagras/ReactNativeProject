import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationPage } from "../constants/navigationConstant";
import HomeContainer from "../pages/home";
import EducationNavigation from "./educationNavigation";
import EventNavigation from "./eventNavigation";
import ProfileContainer from "../pages/profile";
import tr from "../JSON/tr";

const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  const { HOME, EDUCATION_LIST, EVENT_LIST, PROFILE } = navigationPage;

  const ImageRender = ({ uri }) => {
    return <Image style={{ width: 20, height: 20 }} source={uri} />;
  };

  const tabBarFunc = (route, focused) => {
    switch (route.name) {
      case HOME:
        return (
          <ImageRender
            uri={
              focused
                ? require("../../assets/tabIcon/homeActive.png")
                : require("../../assets/tabIcon/home.png")
            }
          />
        );
      case EDUCATION_LIST:
        return (
          <ImageRender
            uri={
              focused
                ? require("../../assets/tabIcon/educationActive.png")
                : require("../../assets/tabIcon/education.png")
            }
          />
        );
      case EVENT_LIST:
        return (
          <ImageRender
            uri={
              focused
                ? require("../../assets/tabIcon/eventActive.png")
                : require("../../assets/tabIcon/event.png")
            }
          />
        );
      case PROFILE:
        return (
          <ImageRender
            uri={
              focused
                ? require("../../assets/tabIcon/userActive.png")
                : require("../../assets/tabIcon/user.png")
            }
          />
        );
    }
  };
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return tabBarFunc(route, focused);
        },
      })}
    >
      <Tabs.Screen
        name={HOME}
        component={HomeContainer}
        options={{
          headerTitle: `${tr[0].app.home["title"]}`,
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name={EDUCATION_LIST}
        component={EducationNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={EVENT_LIST}
        component={EventNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={PROFILE}
        component={ProfileContainer}
        options={{
          headerTitle: `${tr[0].app.profile["title"]}`,
          headerTitleAlign: "center",
        }}
      />
    </Tabs.Navigator>
  );
}
