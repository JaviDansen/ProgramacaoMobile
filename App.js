import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './components/Header';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Header />
        <StatusBar style="dark" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
