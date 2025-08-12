import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import theme from '../theme';
import ButtonPrimary from '../components/ButtonPrimary';
import AppTextInput from '../components/AppTextInput';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Welcome back you've been missed.</Text>
        <AppTextInput placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <AppTextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </TouchableOpacity>
        <ButtonPrimary title="Log In" onPress={() => navigation.navigate('MainApp')} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.footer}>
          <Text style={styles.footerText}>Not a Member? <Text style={styles.link}>Register Now</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.primaryLight, justifyContent: 'center' },
  content: { padding: theme.spacing.lg },
  title: { fontSize: theme.fontSizes.xxl, fontWeight: 'bold', color: theme.colors.primary, textAlign: 'center' },
  subtitle: { textAlign: 'center', color: theme.colors.textLight, marginBottom: theme.spacing.xl, marginTop: theme.spacing.sm },
  forgotPassword: { color: theme.colors.primary, textAlign: 'right', fontSize: theme.fontSizes.sm, marginBottom: theme.spacing.lg, fontWeight: '600' },
  footer: { marginTop: theme.spacing.lg },
  footerText: { textAlign: 'center', color: theme.colors.textLight, fontSize: theme.fontSizes.sm },
  link: { color: theme.colors.primary, fontWeight: 'bold' },
});

