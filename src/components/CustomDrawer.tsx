import { useDrawerProgress } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export const CustomDrawer = () => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(drawerProgress.value, [0, 1], [0, 60], "clamp"),
      },
    ],
  }));

  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View style={[styles.drawerContent, animatedStyle]}>
        <Text style={styles.menuItem}>🏠 Home</Text>
        <Text style={styles.menuItem}>⚙️ Settings</Text>
        <Text style={styles.menuItem}>📞 Contact</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#280cb3",
    paddingTop: 100,
    paddingLeft: 30,
    borderRadius: 24,
    borderTopEndRadius: 0,
  },
  menuItem: {
    color: "#fff",
    fontSize: 22,
    marginVertical: 15,
  },
});
