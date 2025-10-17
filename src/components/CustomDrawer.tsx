import {
  DrawerContentComponentProps,
  DrawerItemList,
  useDrawerProgress,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Colors } from "../constants/colors";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(drawerProgress.value, [0, 1], [0, 60], "clamp"),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.drawerContent, animatedStyle]}>
      <DrawerContentScrollView {...props}>
        <Text style={styles.title}>Beka</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: Colors.purple,
    borderTopStartRadius: 24,
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 60,
  },
});
