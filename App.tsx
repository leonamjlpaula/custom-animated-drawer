import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
  );
}