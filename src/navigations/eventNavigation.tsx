import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationPage } from "../constants/navigationConstant";
import EventListContainer from "../pages/event_list";
import EventDetailContainer from "../pages/event_detail";
import tr from "../JSON/tr";

const Stack = createStackNavigator();

export default function EventNavigation() {
  const { EVENT_LIST, EVENT_DETAIL } = navigationPage;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EVENT_LIST}
        component={EventListContainer}
        options={{
          headerTitle: `${tr[0].app.eventList["title"]}`,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={EVENT_DETAIL}
        component={EventDetailContainer}
        options={{
          headerTitle: `${tr[0].app.eventList["title2"]}`,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
