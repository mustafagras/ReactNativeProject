import Loader from "./src/components/loader";
import CustomSafeAreaView from "./src/components/wrapper";
import MainNavigation from "./src/navigations";

export default function App() {
  return (
    <CustomSafeAreaView>
      <MainNavigation />
      <Loader />
    </CustomSafeAreaView>
  );
}
