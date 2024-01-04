import React from "react";
import { Image, Modal, View, ScrollView, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import { RegisterComponentProps } from "../../types";
import { IS_IOS, embedGoogleURL } from "../../constants/appConstant";
import WhiteContainer from "../../components/whiteContainer";
import BoxContainer from "../../components/boxContainer";
import LogoImage from "../../components/logoImage";
import Input from "../../components/input";
import CustomButton from "../../components/button";
import CustomCheckbox from "../../components/checkbox";
import CustomText from "../../components/text";
import { colors } from "../../UI/Color";
import { width } from "../../UI/Size";
import registerStyle from "../../UI/styles/registerStyle";

export default function RegisterComponent(props: RegisterComponentProps) {
  const {
    isVisible,
    setIsVisible,
    isChecked,
    onModal,
    handleSubmit,
    control,
    errors,
    onSubmit,
  } = props;
  const url = "https://www.africau.edu/images/default/sample.pdf";
  return (
    <WhiteContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoImage />
        <BoxContainer>
          <Input
            name="fullName"
            control={control}
            placeHolder="auth:signUp:fullName"
            errors={errors["fullName"]}
          />
          <Input
            name="email"
            control={control}
            placeHolder="auth:signUp:email"
            keyboardType="email-address"
            errors={errors["email"]}
          />
          <Input
            name="phone"
            control={control}
            placeHolder="auth:signUp:phoneNumber"
            keyboardType="numeric"
            errors={errors["phone"]}
          />
          <Input
            name="password"
            control={control}
            placeHolder="auth:signUp:password"
            secureTextEntry={true}
            errors={errors["password"]}
          />
          <Input
            name="rePassword"
            control={control}
            placeHolder="auth:signUp:rePassword"
            secureTextEntry={true}
            errors={errors["rePassword"]}
          />
          <CustomText tx="auth:signIn:policyInfo" />
          <CustomCheckbox
            tx="auth:signUp:policy auth:signUp:and auth:signUp:terms auth:signUp:inspect"
            checked={isChecked}
            onPress={() => setIsVisible(!isVisible)}
          />
          <CustomButton
            tx={"auth:signUp:register"}
            onPress={() => handleSubmit(onSubmit)()}
            color={colors.red}
          />
        </BoxContainer>
        <Modal visible={isVisible} transparent={true}>
          <View style={registerStyle.modalContainer}>
            <View style={registerStyle.modalWhiteContainer}>
              <TouchableOpacity
                style={registerStyle.closeButton}
                onPress={() => setIsVisible(false)}
              >
                <Image
                  style={registerStyle.closeIcon}
                  source={require("../../../assets/close.png")}
                />
              </TouchableOpacity>
              <WebView
                style={{ width: width * 0.7, zIndex: -1 }}
                source={{
                  uri: IS_IOS ? url : `${embedGoogleURL}${url}`,
                }}
              />
              <CustomButton
                tx="auth:signUp:policyOkey"
                color={colors.lightSeaGreen}
                onPress={onModal}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </WhiteContainer>
  );
}
