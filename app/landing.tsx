import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/common/Logo';

export default function LandingPage() {
  return (
    <SafeAreaView className="flex-1 bg-orange-500">
      <StatusBar barStyle="light-content" />
      <View className="flex-1 justify-center items-center px-8">
        <View className="mb-16">
          <Logo size="text-6xl" />
        </View>
        
        <TouchableOpacity 
          className="bg-white px-12 py-4 rounded-full shadow-lg"
          onPress={() => router.push('/signup')}
        >
          <Text className="text-orange-500 text-xl font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
