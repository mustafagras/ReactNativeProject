import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { RegisterComponentProps } from "../../types";
import WhiteContainer from "../../components/whiteContainer";
import BoxContainer from "../../components/boxContainer";
import LogoImage from "../../components/logoImage";
import Input from "../../components/input";
import CustomButton from "../../components/button";
import { colors } from "../../UI/Color";
import CustomCheckbox from "../../components/checkbox";
import CustomText from "../../components/text";
import { Modal, View } from "react-native";
import registerStyle from "../../UI/styles/registerStyle";

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
              <CustomButton
                tx="auth:signUp:policyOkey"
                color={colors.lightseagreen}
                onPress={onModal}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </WhiteContainer>
  );
}
