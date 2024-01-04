import axios from "axios";
import { apiConfig } from "../apiConfig";
import { Alert } from "react-native";

export const onRegister = (data) => {
  return axios
    .post(apiConfig.postRegister, data)
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("onRegister", err);
      Alert.alert("Kullanıcı bulunamadı");
      return false;
    });
};

export const onLoginService = () => {
  return axios
    .get(apiConfig.getLogin)
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("onLoginService", err);
      Alert.alert("Servis çalışmadı");
      return false;
    });
};

export const getForgotPasswordService = () => {
  return axios
    .get(apiConfig.getTargetPassword)
    .then((res) => {
      console.log("res", res);
      return res.data;
    })
    .catch((err) => {
      console.log("getForgotPasswordService", err);
      Alert.alert("Servis çalışmadı");
      return false;
    });
};

export const onForgotPasswordService = (data, key) => {
  return axios
    .patch(`${apiConfig.patchTargetPassword}/${key}.json`, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log("onForgotPasswordService", err);
      Alert.alert("Servis Çalışmadı");
      return false;
    });
};
