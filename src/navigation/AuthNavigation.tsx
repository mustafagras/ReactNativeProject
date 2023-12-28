import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "../pages/login";
import RegisterContainer from "../pages/register";
import ForgotPasswordContainer from "../pages/forgotPassword";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name={"login"} component={LoginContainer} />
      <Stack.Screen name={"register"} component={RegisterContainer} />
      <Stack.Screen
        name={"forgotPassword"}
        component={ForgotPasswordContainer}
      />
    </Stack.Navigator>
  );
}
