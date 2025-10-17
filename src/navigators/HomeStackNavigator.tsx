import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreen1 } from "../screens/StackScreen1";
import { StackScreen2 } from "../screens/StackScreen2";

export type StackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen1" component={StackScreen1} />
      <Stack.Screen name="Screen2" component={StackScreen2} />
    </Stack.Navigator>
  );
};
