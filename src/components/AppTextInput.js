import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import theme from '../theme';

const AppTextInput = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.textLight}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { width: '100%', marginBottom: theme.spacing.md },
  input: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.md,
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.textDark,
  },
});

export default AppTextInput;

