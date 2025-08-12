import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import theme from '../theme';
import ButtonPrimary from '../components/ButtonPrimary';
import onboardingImage from '../../assets/onboarding-bg.jpg';

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground source={onboardingImage} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Viorra</Text>
          <Text style={styles.subtitle}>Your Beauty, Delivered.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Get Started" onPress={() => navigation.navigate('Register')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'flex-end' },
  textContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 48, fontWeight: 'bold', color: theme.colors.white },
  subtitle: { fontSize: theme.fontSizes.lg, color: theme.colors.white, marginTop: theme.spacing.sm },
  buttonContainer: { padding: theme.spacing.lg, paddingBottom: theme.spacing.xl + 20 },
});
