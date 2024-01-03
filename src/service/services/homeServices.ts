import axios from "axios";
import { Alert } from "react-native";

export const getSliderData = () => {
  axios
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
  axios
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
  axios
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
