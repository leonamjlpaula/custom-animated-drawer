
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import { Orders } from '../screens/Orders';
import { TabNavigator } from './TabNavigator';
import { CustomDrawer } from '../components/CustomDrawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  return (
    
    <Drawer.Navigator    
      screenOptions={{
        headerShown: false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          width: '50%',
        },
      
        sceneStyle: {
          backgroundColor: Colors.transparent,
        },            
      }}
      drawerContent={() => <CustomDrawer />}  
      >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
    
  );
}

const Colors = {
  bg: '#280cb3',
  active: '#fff',
  inactive: '#eee',
  transparent: 'transparent',
};