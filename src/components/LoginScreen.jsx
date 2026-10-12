import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ onLogin, onRegister, onForgotPassword }) {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin();
  };

  const handleRegister = () => {
    onRegister();
  };

  const handleForgotPassword = () => {
    onForgotPassword();
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <View style={styles.inputContainer}>

          <Ionicons
            name="call-outline"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Номер телефона"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

        </View>

        <View style={styles.inputContainer}>

          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

        </View>

        <TouchableOpacity
          style={styles.forgotBtn}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotText}>
            Забыли пароль?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleLogin}
        >
          <Text style={styles.primaryButtonText}>
            Войти
          </Text>
        </TouchableOpacity>

        <View style={styles.footerRow}>

          <Text style={styles.footerText}>
            У вас нет аккаунта?{' '}
          </Text>

          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.linkText}>
              Зарегистрироваться
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    padding: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 16,
  },

  inputIcon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },

  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },

  forgotText: {
    color: '#888',
    fontSize: 13,
  },

  primaryButton: {
    backgroundColor: '#A020F0',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  footerText: {
    color: '#888',
    fontSize: 14,
  },

  linkText: {
    color: '#A020F0',
    fontSize: 14,
    fontWeight: '600',
  },

});