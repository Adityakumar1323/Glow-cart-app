import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../theme';
import ButtonPrimary from '../components/ButtonPrimary';
import AppTextInput from '../components/AppTextInput';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.regContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.regTitle}>Join The Glow!</Text>
        <AppTextInput placeholder="Full Name" value={name} onChangeText={setName} />
        <AppTextInput placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <AppTextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <AppTextInput placeholder="Confirm Password" secureTextEntry />
        <View style={{ marginTop: theme.spacing.md }}>
          <ButtonPrimary title="Create Account" onPress={() => navigation.navigate('MainApp')} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.footer}>
          <Text style={styles.footerText}>Already a Member? <Text style={styles.link}>Log In</Text></Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  regContainer: { flex: 1, backgroundColor: theme.colors.primaryLight },
  scrollContainer: { flexGrow: 1, padding: theme.spacing.lg, justifyContent: 'center' },
  regTitle: { fontSize: theme.fontSizes.xxl, fontWeight: 'bold', color: theme.colors.primary, textAlign: 'center', marginBottom: theme.spacing.xl },
  footer: { marginTop: theme.spacing.lg },
  footerText: { textAlign: 'center', color: theme.colors.textLight, fontSize: theme.fontSizes.sm },
  link: { color: theme.colors.primary, fontWeight: 'bold' },
});
