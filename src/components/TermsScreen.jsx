import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TermsScreen({ onBack }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Қолдану шарттары</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>1. Жалпы ережелер</Text>
        <Text style={styles.text}>
          Бұл қосымшаны пайдалану арқылы сіз осы шарттар мен ережелерді толықтай қабылдайсыз. Қосымша қызметтерін пайдалану үшін телефон арқылы тіркелу қажет.
        </Text>

        <Text style={styles.sectionTitle}>2. Құпиялылық және деректер</Text>
        <Text style={styles.text}>
          Біз сіздің жеке деректеріңіздің (телефон нөмірі) қауіпсіздігін қамтамасыз етіп, оларды үшінші тарапқа бермейміз.
        </Text>

        <Text style={styles.sectionTitle}>3. Пайдаланушы жауапкершілігі</Text>
        <Text style={styles.text}>
          Пайдаланушы өз аккаунтының қауіпсіздігіне және құпия сөздің құпия сақталуына толық жауапты болады.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  backBtn: { marginRight: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  content: { padding: 24 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 8, marginTop: 16 },
  text: { fontSize: 14, color: '#555', lineHeight: 22 },
});