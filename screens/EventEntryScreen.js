import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function EventEntryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        Escaneie o QR Code do evento ou digite o código de acesso.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
});
