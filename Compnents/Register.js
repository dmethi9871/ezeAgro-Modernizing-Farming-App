import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import AppTextInput from './AppTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegisterImage from '../assets/Register.png';
import CompanyLogo from '../assets/digify_logo.jpeg';
import axios from 'axios'; // Import Axios

const Register = ({ navigation: { navigate } }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => { // Make handleSubmit an async function
    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Please confirm your password correctly.');
      return;
    }

    const User = {
      name: name,
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://192.168.29.254:5000/register', User);
      if (!response.data.success) {
        throw new Error('Registration1 failed');
      }
      Alert.alert('Successfully registered');
    } catch (error) {
      console.error(error);
      
      Alert.alert('Registration2 failed');
    }
  };

  return (
    <ImageBackground source={RegisterImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.card}>
              <Image source={CompanyLogo} style={styles.logo} />
              <View style={styles.header}>
                <Text style={styles.headerText}>Create Account</Text>
                <Text style={styles.subHeaderText}>
                  Create an account to explore all the Social platform
                </Text>
              </View>
              <View style={styles.form}>
                <AppTextInput placeholder='Name' icon='person' onChangeText={setName} />
                <AppTextInput placeholder='Email' icon='mail' onChangeText={setEmail} />
                
                <AppTextInput placeholder='Password' icon='lock-closed' secureTextEntry onChangeText={setPassword} />
                <AppTextInput placeholder='Confirm Password' icon='lock-closed' secureTextEntry onChangeText={setConfirmPassword} />
              </View>
              <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
                <Text style={styles.signUpButtonText}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate("Login")} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Already have an account</Text>
              </TouchableOpacity>
              <View style={styles.socialLoginContainer}>
                <Text style={styles.socialLoginText}>or continue with</Text>
                <View style={styles.socialLoginIcons}>
                  <TouchableOpacity style={styles.socialLoginIcon}>
                    <Ionicons name="logo-google" color="#000" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 40,
    padding: 20,
    width: '100%',
    marginTop: 200,
    marginBottom: 200,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#1f41bb',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 20,
    maxWidth: '80%',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  signUpButton: {
    padding: 20,
    backgroundColor: '#E30AB8',
    borderRadius: 10,
    shadowColor: '#1f41bb',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  loginButton: {
    padding: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontSize: 14,
  },
  socialLoginContainer: {
    alignItems: 'center',
  },
  socialLoginText: {
    color: '#1f41bb',
    fontSize: 14,
    marginBottom: 10,
  },
  socialLoginIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLoginIcon: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default Register;
