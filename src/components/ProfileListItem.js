import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme'; // CORRECT IMPORT

export default function ProfileListItem({ icon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <Ionicons name={icon} size={22} color={theme.colors.textDark} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color={theme.colors.textLight} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.md,
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  text: { marginLeft: theme.spacing.md, fontSize: theme.fontSizes.md, color: theme.colors.textDark },
});

