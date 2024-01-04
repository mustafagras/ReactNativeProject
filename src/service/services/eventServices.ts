import axios from "axios";
import { Alert } from "react-native";
import { apiConfig } from "../apiConfig";

export const getEventList = () => {
  return axios
    .get(apiConfig.eventListGet)
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("getEventList", err);
      Alert.alert("Servis çalışmadı");
      return false;
    });
};
