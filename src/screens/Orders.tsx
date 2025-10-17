import { Text, StyleSheet, View } from "react-native";
import { Header } from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerWrapper } from "../components/DrawerWrapper";

export const Orders = () => {
  return (
    <DrawerWrapper>
      <SafeAreaView style={styles.container}>
        <Header title="Orders" />
        <View style={styles.container}>
          <Text>Orders</Text>
        </View>
      </SafeAreaView>
    </DrawerWrapper>
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
