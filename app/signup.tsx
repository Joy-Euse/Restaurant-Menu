import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Logo from '@/components/common/Logo';
import SocialLoginButtons from '@/components/common/SocialLoginButtons';

export default function SignupPage() {
  return (
    <SafeAreaView className="flex-1 bg-orange-500">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-1 bg-white mt-20 rounded-t-3xl">
        <View className="px-8 pt-8">
          <View className="mb-8">
            <Logo />
          </View>
          
          <View className="mb-8">
            <Text className="text-2xl font-semibold text-gray-800">Welcome ...</Text>
            <Text className="text-gray-600">Please fill in the information</Text>
          </View>
          
          <View className="space-y-4 mb-6">
            <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
              <Ionicons name="person-outline" size={20} color="#666" />
              <TextInput 
                className="flex-1 ml-3 text-gray-800"
                placeholder="Full Name"
                placeholderTextColor="#666"
              />
            </View>
            
            <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
              <Ionicons name="call-outline" size={20} color="#666" />
              <TextInput 
                className="flex-1 ml-3 text-gray-800"
                placeholder="Phone Number"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
              />
            </View>
            
            <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
              <Ionicons name="mail-outline" size={20} color="#666" />
              <TextInput 
                className="flex-1 ml-3 text-gray-800"
                placeholder="Your Email"
                placeholderTextColor="#666"
                keyboardType="email-address"
              />
            </View>
          </View>
          
          <TouchableOpacity 
            className="bg-orange-500 py-4 rounded-lg mb-4"
            onPress={() => router.push('/login')}
          >
            <Text className="text-white text-center font-semibold text-lg">Proceed</Text>
          </TouchableOpacity>
          
          <View className="flex-row items-center mb-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="px-4 text-gray-500">OR</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>
          
          <Text className="text-center text-gray-600 mb-4">If you have a PMG account</Text>
          
          <TouchableOpacity 
            className="bg-orange-500 py-4 rounded-lg mb-4"
            onPress={() => router.push('/login')}
          >
            <Text className="text-white text-center font-semibold text-lg">Sign In</Text>
          </TouchableOpacity>
          
          <SocialLoginButtons type="signup" />
        </View>
      </View>
    </SafeAreaView>
  );
}
