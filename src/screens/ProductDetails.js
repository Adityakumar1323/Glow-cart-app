import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import theme from '../theme';
import Header from '../components/Header';
import ButtonPrimary from '../components/ButtonPrimary';
import { useCart } from '../context/CartContext';
import StarRating from '../components/StarRating';
import CartIcon from '../components/CartIcon';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const { addToCart, showToast } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    showToast('Added to Cart');
  };

  const Review = ({ review }) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewerName}>{review.reviewerName}</Text>
        <StarRating rating={review.rating} size={14} />
      </View>
      <Text style={styles.reviewComment}>{review.comment}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title={product.title} 
        onBack={() => navigation.goBack()}
        rightComponent={<CartIcon onPress={() => navigation.navigate('Cart')} />}
      />
      <ScrollView>
        <Image source={{ uri: product.images[0] }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.ratingRow}>
            <StarRating rating={product.rating} />
            <Text style={styles.ratingText}>{product.rating.toFixed(1)} ({product.reviews.length} reviews)</Text>
          </View>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {product.reviews.map((review, index) => <Review key={index} review={review} />)}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonPrimary title="Add to Cart" onPress={handleAddToCart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.white },
  image: { width: '100%', height: 350, resizeMode: 'cover' },
  content: { padding: theme.spacing.lg },
  brand: { fontSize: theme.fontSizes.md, color: theme.colors.textLight, textTransform: 'uppercase', marginBottom: theme.spacing.xs },
  title: { fontSize: theme.fontSizes.xl, fontWeight: 'bold', color: theme.colors.textDark, marginBottom: theme.spacing.sm },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.md },
  ratingText: { marginLeft: theme.spacing.sm, color: theme.colors.textLight },
  price: { fontSize: theme.fontSizes.xxl, color: theme.colors.primary, fontWeight: 'bold', marginBottom: theme.spacing.lg },
  sectionTitle: { fontSize: theme.fontSizes.lg, fontWeight: '600', color: theme.colors.textDark, marginTop: theme.spacing.lg, marginBottom: theme.spacing.sm },
  description: { fontSize: theme.fontSizes.md, color: theme.colors.textDark, lineHeight: 24 },
  buttonContainer: { padding: theme.spacing.md, borderTopWidth: 1, borderTopColor: theme.colors.border },
  reviewContainer: { backgroundColor: theme.colors.grayBackground, padding: theme.spacing.md, borderRadius: theme.radii.md, marginBottom: theme.spacing.sm },
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.xs },
  reviewerName: { fontWeight: '600', color: theme.colors.textDark },
  reviewComment: { color: theme.colors.textLight },
});
