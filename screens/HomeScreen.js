import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet } from 'react-native';

import Header from '../components/Header';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Button title="Ir para Teste" onPress={() => navigation.navigate('Teste')} />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
