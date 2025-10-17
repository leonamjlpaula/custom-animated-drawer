import {Text, StyleSheet, View} from 'react-native'

export const HomeScreen = () => {
 return (
    <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
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
  text: {
    color: '#000'
  }
});