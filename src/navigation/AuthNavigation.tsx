import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "../pages/login";
import RegisterContainer from "../pages/register";
import ForgotPasswordContainer from "../pages/forgotPassword";
import { navigationPage } from "../constants/navigationConstants";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={navigationPage.LOGIN}>
      <Stack.Screen name={navigationPage.LOGIN} component={LoginContainer} />
      <Stack.Screen
        name={navigationPage.REGISTER}
        component={RegisterContainer}
      />
      <Stack.Screen
        name={navigationPage.FORGOT_PASSWORD}
        component={ForgotPasswordContainer}
      />
    </Stack.Navigator>
  );
}
