import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import theme from '../theme';

export default function CartIcon({ onPress }) {
  const { itemCount } = useCart();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="cart-outline" size={28} color={theme.colors.textDark} />
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.sm,
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});