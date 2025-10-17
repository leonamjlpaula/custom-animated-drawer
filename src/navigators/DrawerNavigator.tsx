
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Orders } from '../screens/Orders';
import { TabNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
  );
}
