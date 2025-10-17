import { useNavigation } from '@react-navigation/native';
import {Button, Text, StyleSheet, View} from 'react-native'
import { StackParamList } from '../navigators/HomeStackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../components/Header';
import { SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.container}>
      <Header title='Screen1'/>
      <View style={styles.container}>      
        <Text>StackScreen1</Text>
        <Button title='Go to Screen 2' onPress={handleNavigation}/>
      </View>
    </SafeAreaView>
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