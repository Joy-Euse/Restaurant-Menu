import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Logo from '@/components/common/Logo';
import SearchBar from '@/components/common/SearchBar';
import MealCard from '@/components/common/MealCard';

export default function HomePage() {
  const trendingMeals = [
    {
      id: 1,
      name: 'Burger Deluxe',
      restaurant: 'Burger Palace',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
    },
    {
      id: 2,
      name: 'Pizza Margherita',
      restaurant: 'Pizza Heaven',
      price: '$10.99',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
    },
    {
      id: 3,
      name: 'Sushi Roll',
      restaurant: 'Sushi Master',
      price: '$15.99',
      image: 'https://images.unsplash.com/photo-1579584421395-3d61a3ff8b79?w=300',
    },
  ];

  const advertisements = [
    {
      id: 1,
      name: 'KFC',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
      offer: '20% OFF',
    },
    {
      id: 2,
      name: 'McDonald\'s',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
      offer: 'Free Delivery',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-3 bg-white">
          <View className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' }}
              className="w-full h-full"
            />
          </View>
          
          <Logo size="text-xl" />
          
          <TouchableOpacity className="p-2">
            <Ionicons name="heart" size={24} color="#ef4444" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="px-4 py-4">
          <SearchBar />
        </View>

        {/* Advertisements */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Popular Restaurants</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {advertisements.map((ad) => (
              <View key={ad.id} className="mr-4">
                <View className="relative">
                  <Image 
                    source={{ uri: ad.image }}
                    className="w-64 h-32 rounded-lg"
                  />
                  <View className="absolute top-2 right-2 bg-orange-500 px-2 py-1 rounded">
                    <Text className="text-white text-xs font-bold">{ad.offer}</Text>
                  </View>
                </View>
                <Text className="text-gray-800 font-semibold mt-2">{ad.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Trending Meals */}
        <View className="px-4 pb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Trending Meals</Text>
          <View className="space-y-4">
            {trendingMeals.map((meal) => (
              <MealCard
                key={meal.id}
                id={meal.id}
                name={meal.name}
                restaurant={meal.restaurant}
                price={meal.price}
                image={meal.image}
                onAddToCart={(id) => console.log(`Added meal ${id} to cart`)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
