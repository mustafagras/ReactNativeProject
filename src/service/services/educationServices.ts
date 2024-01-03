import axios from "axios";
import { Alert } from "react-native";

export const getEducationList = () => {
  axios
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
