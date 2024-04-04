import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import SplashScreenImage from '../assets/NewsSplashScreen.jpg'; // Import the background image
import LogoImage from '../assets/digify_logo.jpeg'; // Import the logo image
import Register from './Register';
import Login from './Login';

const SplashScreen = ({ navigation }) => {

  const handleLogin = () => {
    navigation.navigate(Login);
  };


  const handleSignup = () => {
    navigation.navigate(Register);
  };

  return (
    <ImageBackground
      source={SplashScreenImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={LogoImage} style={styles.logo} />
          <Text style={styles.title}>Digify</Text>
          <Text style={styles.subtitle}>Welcome to Digify! Get started by signing in or creating an account.</Text>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup} style={[styles.button, styles.signupButton]}>
          <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: windowWidth * 0.9, // 90% of window width
    maxWidth: 400, // Maximum width for larger screens
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: windowWidth * 0.25, // 25% of window width
    height: windowWidth * 0.25, // 25% of window width
    marginBottom: 10,
  },
  title: {
    fontSize: windowWidth * 0.05, // 5% of window width
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: windowWidth * 0.035, // 3.5% of window width
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: windowWidth * 0.04, // 4% of window width
    paddingHorizontal: windowWidth * 0.1, // 10% of window width
    borderRadius: windowWidth * 0.15, // 15% of window width
    marginBottom: 10,
    width: '100%', // Make buttons full width
  },
  buttonText: {
    color: '#fff',
    fontSize: windowWidth * 0.045, // 4.5% of window width
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  signupButtonText: {
    color: '#007AFF',
  },
});

export default SplashScreen;
