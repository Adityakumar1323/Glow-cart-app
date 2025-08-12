import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme'; // CORRECT IMPORT

export default function StarRating({ rating, size = 16 }) {
  const totalStars = 5;
  const filledStars = Math.round(rating);
  return (
    <View style={styles.container}>
      {[...Array(totalStars)].map((_, index) => (
        <Ionicons
          key={index}
          name={index < filledStars ? 'star' : 'star-outline'}
          size={size}
          color={theme.colors.yellow}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({ container: { flexDirection: 'row' } });
