import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/UI/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightskyblue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
