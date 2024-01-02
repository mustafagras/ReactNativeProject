import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationPage } from "../constants/navigationConstant";
import DashboardContainer from "../pages/dashboard";
import EducationListContainer from "../pages/education_list";
import EventListContainer from "../pages/event_list";
import ProfileContainer from "../pages/profile";

const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  const { HOME, EDUCATION_LIST, EVENT_LIST, PROFILE } = navigationPage;
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={HOME} component={DashboardContainer} />
      <Tabs.Screen name={EDUCATION_LIST} component={EducationListContainer} />
      <Tabs.Screen name={EVENT_LIST} component={EventListContainer} />
      <Tabs.Screen name={PROFILE} component={ProfileContainer} />
    </Tabs.Navigator>
  );
}
