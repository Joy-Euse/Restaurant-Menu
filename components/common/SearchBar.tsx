import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function SearchBar({ 
  placeholder = "Search for your preferred restaurant",
  value,
  onChangeText
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-white rounded-lg px-4 py-3 shadow-sm">
      <Ionicons name="search" size={20} color="#6b7280" />
      <TextInput 
        className="flex-1 ml-3 text-gray-800"
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
