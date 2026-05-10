import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileImage}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' }}
              style={styles.profileImg}
            />
          </View>
          
          <Text style={styles.headerTitle}>SupaMenu</Text>
          
          <TouchableOpacity style={styles.heartIcon}>
            <Ionicons name="heart" size={24} color="#ef4444" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#6b7280" />
            <Text style={styles.searchPlaceholder}>Search for your preferred restaurant</Text>
          </View>
        </View>

        {/* Advertisements */}
        <View style={styles.adsContainer}>
          <Text style={styles.sectionTitle}>Popular Restaurants</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {advertisements.map((ad) => (
              <View key={ad.id} style={styles.adCard}>
                <View style={styles.adImageContainer}>
                  <Image 
                    source={{ uri: ad.image }}
                    style={styles.adImage}
                  />
                  <View style={styles.offerBadge}>
                    <Text style={styles.offerText}>{ad.offer}</Text>
                  </View>
                </View>
                <Text style={styles.adName}>{ad.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Trending Meals */}
        <View style={styles.trendingContainer}>
          <Text style={styles.sectionTitle}>Trending Meals</Text>
          <View style={styles.mealsContainer}>
            {trendingMeals.map((meal) => (
              <View key={meal.id} style={styles.mealCard}>
                <Image 
                  source={{ uri: meal.image }}
                  style={styles.mealImage}
                />
                <View style={styles.mealInfo}>
                  <View>
                    <Text style={styles.mealName}>{meal.name}</Text>
                    <Text style={styles.restaurantName}>{meal.restaurant}</Text>
                    <Text style={styles.mealPrice}>{meal.price}</Text>
                  </View>
                  <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  heartIcon: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchPlaceholder: {
    marginLeft: 12,
    color: '#6b7280',
    fontSize: 16,
  },
  adsContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  adCard: {
    marginRight: 16,
  },
  adImageContainer: {
    position: 'relative',
  },
  adImage: {
    width: 256,
    height: 128,
    borderRadius: 8,
  },
  offerBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#f97316',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  offerText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  adName: {
    color: '#1f2937',
    fontWeight: '600',
    marginTop: 8,
  },
  trendingContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  mealsContainer: {
    gap: 16,
  },
  mealCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  mealImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  mealInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  mealName: {
    color: '#1f2937',
    fontWeight: '600',
    fontSize: 18,
  },
  restaurantName: {
    color: '#6b7280',
  },
  mealPrice: {
    color: '#f97316',
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#f97316',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  addToCartText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
