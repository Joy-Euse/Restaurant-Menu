import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: 'Kigali City Center',
      address: 'KN 4 Ave, Kigali, Rwanda',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300',
      restaurantCount: 25,
      distance: '2.5 km',
    },
    {
      id: 2,
      name: 'Kimihurura District',
      address: 'KG 5 St, Kigali, Rwanda', 
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300',
      restaurantCount: 18,
      distance: '3.8 km',
    },
    {
      id: 3,
      name: 'Nyabugogo Area',
      address: 'KN 67 St, Kigali, Rwanda',
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=300',
      restaurantCount: 32,
      distance: '5.2 km',
    },
    {
      id: 4,
      name: 'Kacyiru Neighborhood',
      address: 'KG 12 Ave, Kigali, Rwanda',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec9730?w=300',
      restaurantCount: 15,
      distance: '4.1 km',
    },
    {
      id: 5,
      name: 'Remera Sector',
      address: 'KG 8 St, Kigali, Rwanda',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300',
      restaurantCount: 22,
      distance: '6.3 km',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose Location</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.locationsList}>
          {locations.map((location) => (
            <TouchableOpacity 
              key={location.id} 
              style={styles.locationCard}
              onPress={() => router.push('/restaurant-detail' as any)}
            >
              <Image 
                source={{ uri: location.image }} 
                style={styles.locationImage}
              />
              <View style={styles.locationInfo}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationAddress}>{location.address}</Text>
                
                <View style={styles.locationStats}>
                  <View style={styles.statItem}>
                    <Ionicons name="restaurant" size={16} color="#f97316" />
                    <Text style={styles.statText}>{location.restaurantCount} restaurants</Text>
                  </View>
                  
                  <View style={styles.statItem}>
                    <Ionicons name="location" size={16} color="#6b7280" />
                    <Text style={styles.statText}>{location.distance}</Text>
                  </View>
                </View>
              </View>
              
              <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
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
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  locationsList: {
    padding: 16,
    gap: 16,
  },
  locationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  locationStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
});
