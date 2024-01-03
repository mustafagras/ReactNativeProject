import axios from "axios";
import { Alert } from "react-native";
import { apiConfig } from "../apiConfig";

export const getEducationList = () => {
  return axios
    .get(apiConfig.educationListGet)
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      Alert.alert("servis çalışmadı");
      return false;
    });
};
