import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { ProductsProvider } from './src/context/ProductsContext';
import { CartProvider } from './src/context/CartContext';
import theme from './src/theme';

// Screens
import OnboardingScreen from './src/screens/Onboarding';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import HomeScreen from './src/screens/Home';
import ProductDetailsScreen from './src/screens/ProductDetails';
import ProfileScreen from './src/screens/Profile';
import CartScreen from './src/screens/CartScreen';
import OffersScreen from './src/screens/OffersScreen'; // New placeholder
import WishlistScreen from './src/screens/WishlistScreen'; // New placeholder

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// This is the main part of the app after logging in
function MainAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Offers') iconName = focused ? 'pricetag' : 'pricetag-outline';
          else if (route.name === 'Wishlist') iconName = focused ? 'heart' : 'heart-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Offers" component={OffersScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Auth Flow */}
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />

            {/* Main App */}
            <Stack.Screen name="MainApp" component={MainAppTabs} />
            
            {/* Screens outside the tab bar */}
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ProductsProvider>
  );
}
