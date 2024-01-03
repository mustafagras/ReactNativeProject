import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationPage } from "../constants/navigationConstant";
import EducationListContainer from "../pages/education_list";
import EducationDetailContainer from "../pages/education_detail";
import tr from "../JSON/tr";

const Stack = createStackNavigator();

export default function EducationNavigation() {
  const { EDUCATION_LIST, EDUCATION_DETAIL } = navigationPage;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EDUCATION_LIST}
        component={EducationListContainer}
        options={{
          headerTitle: `${tr[0].app.educationList["title"]}`,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={EDUCATION_DETAIL}
        component={EducationDetailContainer}
        options={{
          headerTitle: `${tr[0].app.educationList["title2"]}`,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
