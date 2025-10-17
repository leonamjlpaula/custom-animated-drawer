import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cart } from '../screens/Cart';
import { Favourites } from '../screens/Favourites';
import { HomeStack } from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourites" component={Favourites} />
    </Tab.Navigator>
  );
}