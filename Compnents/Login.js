import React,{useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, Image, ScrollView, StyleSheet,Alert } from 'react-native';
import AppTextInput from './AppTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreenImage from '../assets/Spla.jpg'; // Import the background image
import CompanyLogo from '../assets/digify_logo.jpeg';
import NewSCard from '../assets/Untitled design (1).png' // Import the company logo
import { BackgroundImage } from 'react-native-elements/dist/config';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "Forgot Password functionality coming soon!");
  };

  const handleLogin = () => {
    const testEmail = 'test@example.com';
    const testPassword = 'password'; // Define the test password
    // Check if the entered email and password match the test credentials
    // if (email === testEmail && password === testPassword) {
      navigation.navigate("Home");
    // } else {
    //   Alert.alert("Login Failed", "Invalid email or password.");
    // }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleSocialLogin = (provider) => {
    Alert.alert("Social Login", `Logging in with ${provider} account`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageCard}>
            
          <Image source={NewSCard} style={styles.backgroundImage} />
        </View>
        <View style={styles.card}>
          <Image source={CompanyLogo} style={styles.logo} />
          <Text style={styles.title}>DIGIFY</Text>
          <AppTextInput
            placeholder='Email'
            icon='mail'
            value={email}
            onChangeText={setEmail}
          />
          <AppTextInput
            placeholder='Password'
            icon='lock-closed'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.createAccount}>Create new account</Text>
          </TouchableOpacity>
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity onPress={() => handleSocialLogin('Google')} style={styles.socialLoginButton}>
              <Ionicons name="logo-google" color="#000" size={20} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => handleSocialLogin('Apple')} style={styles.socialLoginButton}>
              <Ionicons name="logo-apple" color="#000" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialLogin('Twitter')} style={styles.socialLoginButton}>
              <Ionicons name="logo-twitter" color="#000" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialLogin('Facebook')} style={styles.socialLoginButton}>
              <Ionicons name="logo-facebook" color="#000" size={20} />
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
    imageCard: {
        marginBottom: 20, // Adjust this value as needed
      },
      backgroundImage: {
  flex: 1,
  width: '100%',
  height: undefined, // Set height to undefined to maintain aspect ratio
},

  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageCard: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: -50, // Adjust this value as needed for the curve
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    width: '90%', // Adjust the width as needed
    maxWidth: 400,
    alignSelf: 'center',
    
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f41bb',
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#1f41bb',
  },
  signInButton: {
    backgroundColor: '#E30AB8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  createAccount: {
    padding: 10,
    color: '#000',
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialLoginButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default Login;
