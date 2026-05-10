import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: 'New Order Received',
      message: 'Your order #1234 has been confirmed and is being prepared.',
      time: '2 minutes ago',
      type: 'order',
      read: false,
    },
    {
      id: 2,
      title: 'Special Offer!',
      message: 'Get 20% off on your next order at Burger Palace.',
      time: '1 hour ago',
      type: 'promotion',
      read: false,
    },
    {
      id: 3,
      title: 'Delivery Update',
      message: 'Your order #1232 has been delivered successfully.',
      time: '3 hours ago',
      type: 'delivery',
      read: true,
    },
    {
      id: 4,
      title: 'New Restaurant Added',
      message: 'Pizza Heaven is now available in your area!',
      time: '1 day ago',
      type: 'info',
      read: true,
    },
    {
      id: 5,
      title: 'Payment Successful',
      message: 'Your payment of $25.99 has been processed successfully.',
      time: '2 days ago',
      type: 'payment',
      read: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'order':
        return 'cart-outline';
      case 'promotion':
        return 'pricetag-outline';
      case 'delivery':
        return 'checkmark-circle-outline';
      case 'info':
        return 'information-circle-outline';
      case 'payment':
        return 'card-outline';
      default:
        return 'notifications-outline';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'order':
        return '#f97316';
      case 'promotion':
        return '#10b981';
      case 'delivery':
        return '#059669';
      case 'info':
        return '#3b82f6';
      case 'payment':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.markAllRead}>
          <Text style={styles.markAllReadText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {notifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            style={[
              styles.notificationItem,
              !notification.read && styles.unreadNotification
            ]}
          >
            <View style={[styles.iconContainer, { backgroundColor: getNotificationColor(notification.type) }]}>
              <Ionicons 
                name={getNotificationIcon(notification.type)} 
                size={20} 
                color="#ffffff" 
              />
            </View>
            
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
            
            {!notification.read && (
              <View style={styles.unreadDot} />
            )}
          </TouchableOpacity>
        ))}
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
  markAllRead: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f3f4f6',
    borderRadius: 6,
  },
  markAllReadText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    alignItems: 'center',
  },
  unreadNotification: {
    backgroundColor: '#fef3c7',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f97316',
  },
});
