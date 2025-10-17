import {Text, StyleSheet, View} from 'react-native'

export const Favourites = () => {
 return (
    <View style={styles.container}>
      <Text>Favourites</Text>
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