import 'react-native-gesture-handler';import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Drawer.Screen
  name="About"
  component={About}
  options={{
    drawerIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="information" size={size} color={color} />
    ),
  }}
/>
    </DrawerContentScrollView>
  );
}
