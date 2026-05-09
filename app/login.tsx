import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Logo from '@/components/common/Logo';
import SocialLoginButtons from '@/components/common/SocialLoginButtons';

export default function LoginPage() {
  return (
    <SafeAreaView className="flex-1 bg-orange-500">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-1 bg-white mt-20 rounded-t-3xl">
        <View className="px-8 pt-8">
          <View className="mb-8">
            <Logo />
          </View>
          
          <View className="mb-8">
            <Text className="text-2xl font-semibold text-gray-800">Welcome...</Text>
            <Text className="text-gray-600">Sign in to continue</Text>
          </View>
          
          <View className="space-y-4 mb-6">
            <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
              <Ionicons name="mail-outline" size={20} color="#666" />
              <TextInput 
                className="flex-1 ml-3 text-gray-800"
                placeholder="Your Email"
                placeholderTextColor="#666"
                keyboardType="email-address"
              />
            </View>
            
            <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
              <Ionicons name="lock-closed-outline" size={20} color="#666" />
              <TextInput 
                className="flex-1 ml-3 text-gray-800"
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry
              />
            </View>
          </View>
          
          <TouchableOpacity 
            className="bg-orange-500 py-4 rounded-lg mb-4"
            onPress={() => router.push('/(tabs)')}
          >
            <Text className="text-white text-center font-semibold text-lg">Sign In</Text>
          </TouchableOpacity>
          
          <View className="flex-row items-center mb-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="px-4 text-gray-500">OR</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>
          
          <SocialLoginButtons type="login" />
          
          <View className="flex-row justify-center mt-6 space-x-4">
            <TouchableOpacity>
              <Text className="text-orange-500 font-semibold">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text className="text-orange-500 font-semibold">Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
