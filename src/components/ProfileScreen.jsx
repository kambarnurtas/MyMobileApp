import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ onBack, onAbout, onTerms, onLogout }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>1. Профиль</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={50} color="#A020F0" />
        </View>
        <Text style={styles.name}>Пайдаланушы</Text>
        <Text style={styles.phone}>+7 (700) 555 77 55</Text>

        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem} onPress={onAbout}>
            <Ionicons name="information-circle-outline" size={22} color="#A020F0" />
            <Text style={styles.menuText}>2. Біз туралы</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={onTerms}>
            <Ionicons name="document-text-outline" size={22} color="#A020F0" />
            <Text style={styles.menuText}>3. Қолдану шарттары</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Шығу</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  backBtn: { marginRight: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  content: { padding: 24, alignItems: 'center', flex: 1 },
  avatarContainer: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#F5F5F7', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 4 },
  phone: { fontSize: 14, color: '#888', marginBottom: 24 },
  menuList: { width: '100%', marginBottom: 32 },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F7', padding: 16, borderRadius: 12, marginBottom: 12 },
  menuText: { marginLeft: 12, fontSize: 15, color: '#000', fontWeight: '500' },
  logoutButton: { width: '100%', height: 52, borderRadius: 12, borderWidth: 1, borderColor: '#A020F0', justifyContent: 'center', alignItems: 'center', marginTop: 'auto' },
  logoutText: { color: '#A020F0', fontSize: 16, fontWeight: '600' },
});