import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import ButtonPrimary from '../components/ButtonPrimary';
import theme from '../theme';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen({ navigation }) {
  const { cartItems, addToCart, removeFromCart, cartTotal, showToast } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
    showToast('Cart updated');
  };

  const handleAdd = (item) => {
    addToCart(item);
    showToast('Cart updated');
  };

  const CartItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleRemove(item.id)}>
          <Ionicons name="remove-circle-outline" size={28} color={theme.colors.primary} />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleAdd(item)}>
          <Ionicons name="add-circle-outline" size={28} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Cart" onBack={() => navigation.goBack()} />
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
          />
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>${cartTotal.toFixed(2)}</Text>
            </View>
            <ButtonPrimary title="Checkout" onPress={() => { showToast('Redirecting to payment...') }} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayBackground },
  list: { padding: theme.spacing.md },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderRadius: theme.radii.md,
    alignItems: 'center',
  },
  itemImage: { width: 60, height: 60, borderRadius: theme.radii.sm, marginRight: theme.spacing.md },
  itemDetails: { flex: 1 },
  itemTitle: { fontSize: theme.fontSizes.md, fontWeight: '600', color: theme.colors.textDark },
  itemPrice: { fontSize: theme.fontSizes.sm, color: theme.colors.textLight, marginTop: 4 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantityText: { fontSize: 18, marginHorizontal: theme.spacing.md, fontWeight: 'bold' },
  footer: {
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.white,
  },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: theme.spacing.md },
  totalText: { fontSize: theme.fontSizes.lg, color: theme.colors.textLight },
  totalPrice: { fontSize: theme.fontSizes.lg, fontWeight: 'bold', color: theme.colors.textDark },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: theme.fontSizes.lg, color: theme.colors.textLight },
});