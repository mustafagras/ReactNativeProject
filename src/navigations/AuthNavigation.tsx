import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationPage } from "../constants/navigationConstant";
import LoginContainer from "../pages/login";
import RegisterContainer from "../pages/register";
import ForgotPasswordContainer from "../pages/forgotPassword";
import tr from "../JSON/tr";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  const { LOGIN, REGISTER, FORGOT_PASSWORD } = navigationPage;
  return (
    <Stack.Navigator initialRouteName={LOGIN}>
      <Stack.Screen
        name={LOGIN}
        component={LoginContainer}
        options={{
          headerTitle: `${tr[0].auth.signIn["title"]}`,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={REGISTER}
        component={RegisterContainer}
        options={{
          headerTitle: `${tr[0].auth.signUp["title"]}`,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={FORGOT_PASSWORD}
        component={ForgotPasswordContainer}
        options={{
          headerTitle: `${tr[0].auth.forgotPassword["title"]}`,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
