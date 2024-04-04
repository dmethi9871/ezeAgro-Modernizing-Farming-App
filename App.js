import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './Compnents/SplashScreen';
import HomeScreen from './Compnents/HomeScreen';
import SettingsScreen from './Compnents/SettingsScreen';
import ProfileScreen from './Compnents/ProfileScreen';
import Login from './Compnents/Login';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Register from './Compnents/Register';
import OCRScreen from './Compnents/OCRScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#007AFF',
      inactiveTintColor: '#8E8E93',
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      tabStyle: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconStyle: {
        marginBottom: 5,
      },
      style: {
        height: 500,
        position: 'absolute',
        bottom: 30,
        left: 0, 
        right: 0,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        elevation: 5, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }}
  >
    <Tab.Screen
      name="login"
      component={Login}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="login" color={color} size={30} /> // Increased icon size to 30
        ),
      }}
    />
    <Tab.Screen
      name="Register"
      component={Register}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="Register" color={color} size={30} /> // Increased icon size to 30
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cog" color={color} size={30} /> // Increased icon size to 30
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={30} /> // Increased icon size to 30
        ),
      }}
    />
    <Tab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="login" color={color} size={20} /> // Increased icon size to 30
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ImageOCr"
          component={OCRScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainNavigation"
          component={MainNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
