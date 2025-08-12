import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme'; // CORRECT IMPORT

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.brand} numberOfLines={1}>{product.brand}</Text>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: theme.spacing.sm, backgroundColor: theme.colors.white, borderRadius: theme.radii.md, overflow: 'hidden' },
  image: { width: '100%', height: 140, resizeMode: 'cover' },
  info: { padding: theme.spacing.md },
  brand: { fontSize: theme.fontSizes.xs, color: theme.colors.textLight, textTransform: 'uppercase', marginBottom: 2 },
  title: { fontSize: theme.fontSizes.sm, fontWeight: '600', color: theme.colors.textDark, marginBottom: 4 },
  price: { fontSize: theme.fontSizes.sm, fontWeight: 'bold', color: theme.colors.primary },
});