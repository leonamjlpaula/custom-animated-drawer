import {Text, StyleSheet, View} from 'react-native'

export const Orders = () => {
 return (
    <View style={styles.container}>
      <Text>Orders</Text>
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