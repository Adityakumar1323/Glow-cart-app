import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme'; // CORRECT IMPORT

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={theme.colors.textLight} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for products..."
        placeholderTextColor={theme.colors.textLight}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    paddingHorizontal: theme.spacing.md,
    margin: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  icon: { marginRight: theme.spacing.sm },
  input: { flex: 1, height: 48, fontSize: theme.fontSizes.md, color: theme.colors.textDark },
});
