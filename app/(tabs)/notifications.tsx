import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationsPage() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-500 text-lg">Notifications Page</Text>
        <Text className="text-gray-400 text-sm mt-2">No notifications yet</Text>
      </View>
    </SafeAreaView>
  );
}
