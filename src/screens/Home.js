import React, { useState, useMemo } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { useProducts } from '../context/ProductsContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CartIcon from '../components/CartIcon';
import theme from '../theme';

export default function HomeScreen({ navigation }) {
  const { products, loading } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [products, searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Discover" 
        rightComponent={<CartIcon onPress={() => navigation.navigate('Cart')} />}
      />
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      {loading ? (
        <ActivityIndicator style={styles.loader} size="large" color={theme.colors.primary} />
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails', { product: item })} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayBackground },
  list: { paddingHorizontal: theme.spacing.sm },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});