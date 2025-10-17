import {Text, StyleSheet, View} from 'react-native'

export const Screen1 = () => {
 return (
    <View style={styles.container}>
      <Text>Screen1</Text>
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