import React, { useState } from 'react';
import { View } from 'react-native';

import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import ForgotPassword from './src/components/ForgotPassword';
import OTPScreen from './src/components/OTPScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen';
import SelectCityScreen from './src/components/SelectCityScreen';

import ProfileScreen from './src/components/ProfileScreen';
import AboutScreen from './src/components/AboutScreen';
import TermsScreen from './src/components/TermsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return (
          <LoginScreen 
            onLogin={() => setCurrentScreen('SelectCity')}
            onRegister={() => setCurrentScreen('Register')}
            onForgotPassword={() => setCurrentScreen('ForgotPassword')}
            // Қаласаңыз Login бетінен шарттарға өту үшін: onTerms={() => setCurrentScreen('Terms')}
          />
        );
      case 'Register':
        return (
          <RegisterScreen 
            onBack={() => setCurrentScreen('Login')}
            onRegisterSuccess={() => setCurrentScreen('SelectCity')}
            onLogin={() => setCurrentScreen('Login')}
          />
        );
      case 'ForgotPassword':
        return (
          <ForgotPassword 
            onBack={() => setCurrentScreen('Login')}
            onNext={() => setCurrentScreen('OTP')}
          />
        );
      case 'OTP':
        return (
          <OTPScreen 
            onBack={() => setCurrentScreen('ForgotPassword')}
            onNext={() => setCurrent('ResetPassword')}
          />
        );
      case 'ResetPassword':
        return (
          <ResetPasswordScreen 
            onBack={() => setCurrentScreen('OTP')}
            onNext={() => setCurrentScreen('Login')}
          />
        );
      case 'SelectCity':
        return (
          <SelectCityScreen 
            onBack={() => setCurrentScreen('Login')}
            onFinish={() => setCurrentScreen('Profile')} // Қала үстінен Профильге өтетін етіп қойдық
          />
        );
      case 'Profile':
        return (
          <ProfileScreen 
            onBack={() => setCurrentScreen('SelectCity')} 
            onAbout={() => setCurrentScreen('About')}
            onTerms={() => setCurrentScreen('Terms')}
            onLogout={() => setCurrentScreen('Login')} 
          />
        );
      case 'About':
        return (
          <AboutScreen 
            onBack={() => setCurrentScreen('Profile')} 
          />
        );
      case 'Terms':
        return (
          <TermsScreen 
            onBack={() => setCurrentScreen('Profile')} 
          />
        );
      default:
        return <LoginScreen onLogin={() => setCurrentScreen('SelectCity')} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
}