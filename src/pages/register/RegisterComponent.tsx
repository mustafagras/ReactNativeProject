import React from "react";
import { Image, Modal, View, ScrollView, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import { RegisterComponentProps } from "../../types";
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
import { IS_IOS, embedGoogleURL } from "../../constants/appConstant";

export default function RegisterComponent(props: RegisterComponentProps) {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    rePassword,
    setRePassword,
    isVisible,
    setIsVisible,
    isChecked,
    onModal,
  } = props;
  const url = "https://www.africau.edu/images/default/sample.pdf";
  return (
    <WhiteContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoImage />
        <BoxContainer>
          <Input
            value={fullName}
            setValue={setFullName}
            placeHolder="auth:signUp:fullName"
          />
          <Input
            value={email}
            setValue={setEmail}
            placeHolder="auth:signUp:email"
            keyboardType="email-address"
          />
          <Input
            value={phone}
            setValue={setPhone}
            placeHolder="auth:signUp:phoneNumber"
            keyboardType="numeric"
          />
          <Input
            value={password}
            setValue={setPassword}
            placeHolder="auth:signUp:password"
            secureTextEntry={true}
          />
          <Input
            value={rePassword}
            setValue={setRePassword}
            placeHolder="auth:signUp:rePassword"
            secureTextEntry={true}
          />
          <CustomText tx="auth:signIn:policyInfo" />
          <CustomCheckbox
            tx="auth:signUp:policy auth:signUp:and auth:signUp:terms auth:signUp:inspect"
            checked={isChecked}
            onPress={() => setIsVisible(!isVisible)}
          />
          <CustomButton
            tx={"auth:signUp:register"}
            onPress={() => console.log()}
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
