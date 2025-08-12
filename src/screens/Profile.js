import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // <-- THIS LINE IS ADDED
import theme from '../theme';
import Header from '../components/Header';
import ProfileListItem from '../components/ProfileListItem';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" />
      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Olivia</Text>
            <Text style={styles.email}>olivia@gmail.com</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: 'auto' }}>
            <Ionicons name="ellipsis-horizontal" size={24} color={theme.colors.textDark} />
          </TouchableOpacity>
        </View>

        <View style={styles.menu}>
          <ProfileListItem icon="location-outline" text="Address" onPress={() => {}} />
          <ProfileListItem icon="receipt-outline" text="Order History" onPress={() => {}} />
          <ProfileListItem icon="language-outline" text="Language" onPress={() => {}} />
          <ProfileListItem icon="notifications-outline" text="Notifications" onPress={() => {}} />
          <ProfileListItem icon="call-outline" text="Contact Us" onPress={() => {}} />
          <ProfileListItem icon="help-circle-outline" text="Get Help" onPress={() => {}} />
          <ProfileListItem icon="shield-checkmark-outline" text="Privacy Policy" onPress={() => {}} />
          <ProfileListItem icon="document-text-outline" text="Terms and Conditions" onPress={() => {}} />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <Ionicons name="log-out-outline" size={22} color={theme.colors.primary} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayBackground },
  content: { flex: 1, padding: theme.spacing.lg },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.radii.md,
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: theme.spacing.md },
  name: { fontSize: theme.fontSizes.lg, fontWeight: 'bold', color: theme.colors.textDark },
  email: { fontSize: theme.fontSizes.sm, color: theme.colors.textLight },
  menu: { flex: 1 },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  logoutText: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.primary,
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
  },
});

