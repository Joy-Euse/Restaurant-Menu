import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function RestaurantsPage() {
  const restaurants = [
    {
      id: 1,
      name: 'Burger Palace',
      cuisine: 'American',
      rating: 4.5,
      deliveryTime: '20-30 min',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
      offer: '20% OFF',
    },
    {
      id: 2,
      name: 'Pizza Heaven',
      cuisine: 'Italian',
      rating: 4.3,
      deliveryTime: '25-40 min',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
      offer: 'Free Delivery',
    },
    {
      id: 3,
      name: 'Sushi Master',
      cuisine: 'Japanese',
      rating: 4.7,
      deliveryTime: '30-45 min',
      image: 'https://images.unsplash.com/photo-1579584421395-3d61a3ff8b79?w=300',
      offer: null,
    },
    {
      id: 4,
      name: 'Taco Fiesta',
      cuisine: 'Mexican',
      rating: 4.2,
      deliveryTime: '15-25 min',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
      offer: 'Buy 1 Get 1',
    },
    {
      id: 5,
      name: 'Dragon Wok',
      cuisine: 'Chinese',
      rating: 4.6,
      deliveryTime: '35-50 min',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
      offer: null,
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={12} color="#fbbf24" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Ionicons key="half" name="star-half" size={12} color="#fbbf24" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={12} color="#d1d5db" />);
    }
    
    return <View style={styles.stars}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Restaurants</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#f97316" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.restaurantsGrid}>
          {restaurants.map((restaurant) => (
            <TouchableOpacity 
              key={restaurant.id} 
              style={styles.restaurantCard}
              onPress={() => console.log(`Selected restaurant: ${restaurant.name}`)}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: restaurant.image }} 
                  style={styles.restaurantImage}
                />
                {restaurant.offer && (
                  <View style={styles.offerBadge}>
                    <Text style={styles.offerText}>{restaurant.offer}</Text>
                  </View>
                )}
              </View>
              
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.cuisineType}>{restaurant.cuisine}</Text>
                
                <View style={styles.ratingContainer}>
                  {renderStars(restaurant.rating)}
                  <Text style={styles.ratingText}>{restaurant.rating}</Text>
                </View>
                
                <View style={styles.deliveryInfo}>
                  <Ionicons name="time-outline" size={14} color="#6b7280" />
                  <Text style={styles.deliveryTime}>{restaurant.deliveryTime}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
    textAlign: 'center',
  },
  filterButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  restaurantsGrid: {
    padding: 16,
    gap: 16,
  },
  restaurantCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  restaurantImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  offerBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#f97316',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  offerText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  restaurantInfo: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  cuisineType: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTime: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
});
