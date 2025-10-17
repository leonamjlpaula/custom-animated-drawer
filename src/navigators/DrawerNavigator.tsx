
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/Home';
import { Screen1 } from '../screens/Screen1';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Screen1" component={Screen1} />
    </Drawer.Navigator>
  );
}
