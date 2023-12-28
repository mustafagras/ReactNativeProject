import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "../pages/login";
import RegisterContainer from "../pages/register";
import ForgotPasswordContainer from "../pages/forgotPassword";
import { navigationPage } from "../constants/navigationConstant";
import tr from "../JSON/tr";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  const { LOGIN, REGISTER, FORGOT_PASSWORD } = navigationPage;
  return (
    <Stack.Navigator initialRouteName={LOGIN}>
      <Stack.Screen
        name={LOGIN}
        component={LoginContainer}
        options={{ title: `${tr[0].auth.signIn["title"]}` }}
      />
      <Stack.Screen
        name={REGISTER}
        component={RegisterContainer}
        options={{ title: `${tr[0].auth.signUp["title"]}` }}
      />
      <Stack.Screen
        name={FORGOT_PASSWORD}
        component={ForgotPasswordContainer}
        options={{ title: `${tr[0].auth.forgotPassword["title"]}` }}
      />
    </Stack.Navigator>
  );
}
