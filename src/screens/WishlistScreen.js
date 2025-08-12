import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import theme from '../theme';

export default function WishlistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Wishlist" />
      <View style={styles.content}>
        <Text style={styles.text}>Wishlist Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayBackground },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: theme.fontSizes.lg, color: theme.colors.textLight },
});

