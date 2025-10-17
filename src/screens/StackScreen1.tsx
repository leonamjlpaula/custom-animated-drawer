import { useNavigation } from '@react-navigation/native';
import {Button, Text, StyleSheet, View} from 'react-native'
import { StackParamList } from '../navigators/HomeStackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Screen1'
>;

export const StackScreen1 = () => {

  const {navigate} = useNavigation<ProfileScreenNavigationProp>();

  const handleNavigation = () => {
    navigate('Screen2');
  }

 return (
    <View style={styles.container}>
      <Text>StackScreen1</Text>
      <Button title='Go to Screen 2' onPress={handleNavigation}/>
    </View>
 )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});