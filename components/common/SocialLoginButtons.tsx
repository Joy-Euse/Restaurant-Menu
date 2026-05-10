import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

interface SocialLoginButtonsProps {
  type: 'signup' | 'login';
}

export default function SocialLoginButtons({ type }: SocialLoginButtonsProps) {
  const googleText = type === 'signup' ? 'Signup with Google' : 'Login with Google';
  const facebookText = type === 'signup' ? 'Signup with Facebook' : 'Login with facebook';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.googleButton}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>{googleText}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.facebookButton}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>{facebookText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
