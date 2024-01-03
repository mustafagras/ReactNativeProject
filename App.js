import { useEffect } from "react";
import Loader from "./src/components/loader";
import CustomSafeAreaView from "./src/components/wrapper";
import MainNavigation from "./src/navigations";
import axios from "axios";

export default function App() {
  const onGetFunc = () => {
    axios
      .get("https://wissenreactnative-default-rtdb.firebaseio.com/example.json")
      .then((res) => {
        console.log("response", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onGetFuncAsync = async () => {
    const res = await axios.get(
      "https://wissenreactnative-default-rtdb.firebaseio.com/exampleAsync.json"
    );

    console.log("response", res.data);
  };

  const onPostFunc = () => {
    axios
      .post(
        "https://wissenreactnative-default-rtdb.firebaseio.com/example.json",
        { name: "mustafa" }
      )
      .then((res) => {
        console.log("response", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onPostFuncAsync = async () => {
    const res = await axios.post(
      "https://wissenreactnative-default-rtdb.firebaseio.com/exampleAsync.json",
      { name: "mustafa" }
    );

    console.log("response", res.data);
  };

  useEffect(() => {
    // onGetFunc();
    // onGetFuncAsync();
    // onPostFunc();
    // onPostFuncAsync();
  }, []);

  return (
    <CustomSafeAreaView>
      <MainNavigation />
      <Loader />
    </CustomSafeAreaView>
  );
}
