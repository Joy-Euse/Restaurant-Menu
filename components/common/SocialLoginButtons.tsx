import { TouchableOpacity, Text, Image, View } from 'react-native';

interface SocialLoginButtonsProps {
  type: 'signup' | 'login';
}

export default function SocialLoginButtons({ type }: SocialLoginButtonsProps) {
  const googleText = type === 'signup' ? 'Signup with Google' : 'Login with Google';
  const facebookText = type === 'signup' ? 'Signup with Facebook' : 'Login with facebook';

  return (
    <View className="space-y-3">
      <TouchableOpacity className="flex-row items-center justify-center bg-red-500 py-3 rounded-lg">
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
          className="w-5 h-5 mr-2"
        />
        <Text className="text-white font-semibold">{googleText}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="flex-row items-center justify-center bg-blue-600 py-3 rounded-lg">
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
          className="w-5 h-5 mr-2"
        />
        <Text className="text-white font-semibold">{facebookText}</Text>
      </TouchableOpacity>
    </View>
  );
}
