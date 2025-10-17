import { useNavigation } from "@react-navigation/native";
import { Button, Text, StyleSheet, View } from "react-native";

export const StackScreen2 = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>StackScreen2</Text>
      <Button title="Go back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
