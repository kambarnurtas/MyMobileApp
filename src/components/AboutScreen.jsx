import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen({ onBack }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Біз туралы</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="information-circle-outline" size={60} color="#A020F0" />
        </View>
        <Text style={styles.title}>Қосымша туралы</Text>
        <Text style={styles.version}>Нұсқасы: 1.0.0</Text>
        <Text style={styles.description}>
          Бұл қосымша күнделікті тапсырмалар мен қызметтерді жылдам әрі ыңғайлы басқаруға арналған.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  backBtn: { marginRight: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  content: { padding: 24, alignItems: 'center', justifyContent: 'center', flex: 1 },
  iconContainer: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#F5F5F7', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  version: { fontSize: 14, color: '#888', marginBottom: 16 },
  description: { fontSize: 14, color: '#555', textAlign: 'center', lineHeight: 20 },
});