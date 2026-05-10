import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryPage() {
  const orderHistory = [
    {
      id: 1,
      orderNumber: '#1234',
      restaurant: 'Burger Palace',
      items: ['Burger Deluxe x2', 'Fries x1', 'Coke x2'],
      total: 35.97,
      date: '2024-01-15',
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200',
    },
    {
      id: 2,
      orderNumber: '#1233',
      restaurant: 'Pizza Heaven',
      items: ['Pizza Margherita x1', 'Garlic Bread x2'],
      total: 28.97,
      date: '2024-01-14',
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200',
    },
    {
      id: 3,
      orderNumber: '#1232',
      restaurant: 'Sushi Master',
      items: ['Sushi Roll Combo x1', 'Miso Soup x2'],
      total: 45.99,
      date: '2024-01-13',
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1579584421395-3d61a3ff8b79?w=200',
    },
    {
      id: 4,
      orderNumber: '#1231',
      restaurant: 'Taco Fiesta',
      items: ['Beef Tacos x3', 'Nachos x1', 'Soda x2'],
      total: 42.99,
      date: '2024-01-12',
      status: 'cancelled',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200',
    },
    {
      id: 5,
      orderNumber: '#1230',
      restaurant: 'Dragon Wok',
      items: ['Sweet & Sour Chicken x1', 'Fried Rice x2'],
      total: 31.98,
      date: '2024-01-11',
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'delivered' ? '#10b981' : '#ef4444';
  };

  const getStatusText = (status: string) => {
    return status === 'delivered' ? 'Delivered' : 'Cancelled';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Order History</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.ordersList}>
          {orderHistory.map((order) => (
            <TouchableOpacity key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <View style={styles.orderInfo}>
                  <Text style={styles.orderNumber}>{order.orderNumber}</Text>
                  <Text style={styles.orderDate}>{formatDate(order.date)}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                  <Text style={styles.statusText}>{getStatusText(order.status)}</Text>
                </View>
              </View>

              <View style={styles.orderContent}>
                <Image 
                  source={{ uri: order.image }} 
                  style={styles.restaurantImage}
                />
                
                <View style={styles.orderDetails}>
                  <Text style={styles.restaurantName}>{order.restaurant}</Text>
                  
                  <View style={styles.itemsContainer}>
                    {order.items.slice(0, 2).map((item, index) => (
                      <Text key={index} style={styles.itemText}>• {item}</Text>
                    ))}
                    {order.items.length > 2 && (
                      <Text style={styles.moreItemsText}>+{order.items.length - 2} more items</Text>
                    )}
                  </View>
                  
                  <View style={styles.orderFooter}>
                    <Text style={styles.totalText}>Total: ${order.total.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.reorderButton}>
                      <Ionicons name="refresh" size={16} color="#ffffff" />
                      <Text style={styles.reorderText}>Reorder</Text>
                    </TouchableOpacity>
                  </View>
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
  },
  filterButton: {
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
  ordersList: {
    padding: 16,
    gap: 16,
  },
  orderCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderInfo: {
    flex: 1,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  orderDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  orderContent: {
    flexDirection: 'row',
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  orderDetails: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  itemsContainer: {
    marginBottom: 12,
  },
  itemText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  moreItemsText: {
    fontSize: 14,
    color: '#f97316',
    fontWeight: '500',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  reorderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f97316',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  reorderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 4,
  },
});
