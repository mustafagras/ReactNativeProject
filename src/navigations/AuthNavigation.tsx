import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "../pages/login";
import RegisterContainer from "../pages/register";
import ForgotPasswordContainer from "../pages/forgotPassword";
import { navigationPage } from "../constants/navigationConstant";
import tr from "../JSON/tr";

const Stack = createStackNavigator();
type Customtypr = {
  name: string;
};

export default function AuthNavigation() {
  const { LOGIN, REGISTER, FORGOT_PASSWORD } = navigationPage;
  const options = (navigationPage) => tr[0].auth.signIn[navigationPage];
  return (
    <Stack.Navigator initialRouteName={LOGIN}>
      <Stack.Screen
        name={LOGIN}
        component={LoginContainer}
        options={{ title: `${options(LOGIN)}` }}
      />
      <Stack.Screen
        name={REGISTER}
        component={RegisterContainer}
        options={{ title: `${options(REGISTER)}` }}
      />
      <Stack.Screen
        name={FORGOT_PASSWORD}
        component={ForgotPasswordContainer}
        options={{ title: `${options(FORGOT_PASSWORD)}` }}
      />
    </Stack.Navigator>
  );
}
