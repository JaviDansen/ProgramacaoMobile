import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BEAST MARAGAMES</Text>
      <Text style={styles.welcome}>Bem-vindo à BEAST!</Text>
      <Text style={styles.description}>
        Participe das experiências e eventos da BEAST MARAGAMES.
      </Text>
      <Pressable
        style={styles.eventButton}
        onPress={() => navigation.navigate('EventEntry')}
      >
        <Text style={styles.eventButtonText}>Entrar em um evento</Text>
      </Pressable>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 18,
    marginTop: 24,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  eventButton: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 4,
    marginTop: 24,
    padding: 12,
  },
  eventButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
