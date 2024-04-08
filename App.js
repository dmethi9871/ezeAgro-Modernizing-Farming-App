import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SplashScreen from './Compnents/SplashScreen';
import HomeScreen from './Compnents/HomeScreen';
import Login from './Compnents/Login';
import Register from './Compnents/Register';
import OCRScreen from './Compnents/OCRScreen';
import LetterGenerator from './Compnents/LetterGenerator';
import About from './Compnents/About';
import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Drawer"
      component={DrawerScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="LetterGenerator"
      component={LetterGenerator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="envelope" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="LetterGenerator"
      component={LetterGenerator}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="envelope" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information" size={size} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
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
          options={{ title: '' }}
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
          options={({ navigation }) => ({
            title: 'Home',
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <IconButton
                icon="dots-vertical"
                onPress={() => {}}
              />
            ),
          })}
        />
        <Stack.Screen
          name="LetterGenerator"
          component={LetterGenerator}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;