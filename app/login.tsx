import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.whiteCard}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>
              <Text style={styles.supaText}>Supa</Text>
              <Text style={styles.menuText}>Menu</Text>
            </Text>
          </View>
          
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome...</Text>
            <Text style={styles.subtitleText}>Sign in to continue</Text>
          </View>
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#666" />
              <TextInput 
                style={styles.input}
                placeholder="Your Email"
                placeholderTextColor="#666"
                keyboardType="email-address"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#666" />
              <TextInput 
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry
              />
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.signInButton}
            onPress={() => router.push('/(tabs)')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.googleButton}>
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Login with Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.facebookButton}>
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Login with facebook</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.linkContainer}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity onPress={() => router.push('/signup')} style={styles.registerLink}>
            <Text style={styles.linkText}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f97316',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 80,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  content: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  supaText: {
    color: '#000000',
  },
  menuText: {
    color: '#f97316',
  },
  welcomeContainer: {
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
  },
  subtitleText: {
    color: '#6b7280',
  },
  formContainer: {
    marginBottom: 24,
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    color: '#1f2937',
  },
  signInButton: {
    backgroundColor: '#f97316',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
  },
  orText: {
    paddingHorizontal: 16,
    color: '#6b7280',
  },
  socialContainer: {
    gap: 12,
    marginBottom: 24,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 8,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  linkText: {
    color: '#f97316',
    fontWeight: '600',
  },
  registerLink: {
    alignSelf: 'center',
    marginTop: 16,
  },
});
