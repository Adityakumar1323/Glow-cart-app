import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import theme from '../theme';

export default function ToastMessage({ message, visible }) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: theme.colors.textDark,
    borderRadius: theme.radii.xl,
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.sm,
  },
});