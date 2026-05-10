import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            <Text style={styles.supaText}>Supa</Text>
            <Text style={styles.menuText}>Menu</Text>
          </Text>
        </View>
        
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f97316', // orange-500
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    marginBottom: 64,
  },
  logo: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  supaText: {
    color: '#000000',
  },
  menuText: {
    color: '#ffffff',
  },
  getStartedButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 9999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  getStartedText: {
    color: '#f97316',
    fontSize: 20,
    fontWeight: '600',
  },
});
