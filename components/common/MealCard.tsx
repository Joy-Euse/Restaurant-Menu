import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Image 
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.restaurant}>{restaurant}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => onAddToCart?.(id)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  name: {
    color: '#1f2937',
    fontWeight: '600',
    fontSize: 18,
  },
  restaurant: {
    color: '#6b7280',
  },
  price: {
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
