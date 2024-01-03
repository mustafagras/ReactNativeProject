import axios from "axios";
import { Alert } from "react-native";
import { apiConfig } from "../apiConfig";

export const getSliderData = () => {
  return axios
    .get(apiConfig.sliderDataGet)
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      Alert.alert("servis çalışmadı");
      return false;
    });
};

export const getPartnersData = () => {
  return axios
    .get(apiConfig.partnersDataGet)
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      Alert.alert("servis çalışmadı");
      return false;
    });
};

export const getSuccessStoriesData = () => {
  return axios
    .get(apiConfig.successStoriesDataGet)
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      Alert.alert("servis çalışmadı");
      return false;
    });
};
