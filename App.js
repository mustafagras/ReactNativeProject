import CustomSafeAreaView from './src/components/wrapper/CustomSafeArea';
import LoginContainer from './src/pages/login';

export default function App() {
  return (
    <CustomSafeAreaView>
      <LoginContainer />
    </CustomSafeAreaView>
  );
};
