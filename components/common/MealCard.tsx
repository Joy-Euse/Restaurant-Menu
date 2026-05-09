import { View, Text, TouchableOpacity, Image } from 'react-native';

interface MealCardProps {
  id: number;
  name: string;
  restaurant: string;
  price: string;
  image: string;
  onAddToCart?: (id: number) => void;
}

export default function MealCard({ id, name, restaurant, price, image, onAddToCart }: MealCardProps) {
  return (
    <View className="bg-white rounded-lg p-4 shadow-sm flex-row">
      <Image 
        source={{ uri: image }}
        className="w-20 h-20 rounded-lg"
      />
      <View className="flex-1 ml-4 justify-between">
        <View>
          <Text className="text-gray-800 font-semibold text-lg">{name}</Text>
          <Text className="text-gray-600">{restaurant}</Text>
          <Text className="text-orange-500 font-bold">{price}</Text>
        </View>
        <TouchableOpacity 
          className="bg-orange-500 px-4 py-2 rounded-lg self-start"
          onPress={() => onAddToCart?.(id)}
        >
          <Text className="text-white font-semibold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
