import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SignupPage() {
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
            <Text style={styles.welcomeText}>Welcome ...</Text>
            <Text style={styles.subtitleText}>Please fill in the information</Text>
          </View>
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#666" />
              <TextInput 
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#666"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color="#666" />
              <TextInput 
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
              />
            </View>
            
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
            style={styles.proceedButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
          
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          
          <Text style={styles.accountText}>If you have a PMG account</Text>
          
          <TouchableOpacity 
            style={styles.signInButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.googleButton}>
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Signup with Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.facebookButton}>
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Signup with Facebook</Text>
            </TouchableOpacity>
          </View>
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
  proceedButton: {
    backgroundColor: '#f97316',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
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
  accountText: {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 16,
  },
  socialContainer: {
    gap: 12,
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
});
