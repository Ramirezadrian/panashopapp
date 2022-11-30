
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AppNavigator from './navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-italic': require('../assets/fonts/Rubik-Italic.ttf'),
  });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#84DCC6" size="large" />
      </View>
    );
  }
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
