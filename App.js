import CustomSafeAreaView from './src/components/wrapper';
import MainNavigation from './src/navigations';

export default function App() {
  return (
    <CustomSafeAreaView>
      <MainNavigation />
    </CustomSafeAreaView>
  );
};
