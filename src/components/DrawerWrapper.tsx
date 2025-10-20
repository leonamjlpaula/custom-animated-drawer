import { useDrawerProgress } from "@react-navigation/drawer";
import { ReactNode } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Colors } from "../constants/colors";

export const DrawerWrapper = ({ children }: { children: ReactNode }) => {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: deviceWidth / 2 },
      { translateY: -deviceHeight / 2 },
      {
        rotateZ: `${interpolate(drawerProgress.value, [0, 1], [0, -10], "clamp")}deg`,
      },
      { translateX: -deviceWidth / 2 },
      { translateY: deviceHeight / 2 },
    ],
    borderRadius: interpolate(drawerProgress.value, [0, 1], [0, 24], "clamp"),
    overflow: "hidden",
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(drawerProgress.value, [0, 1], [0, 60], "clamp"),
      },
    ],
  }));

  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, styles.backgroundView, backgroundStyle]}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundView: {
    backgroundColor: Colors.purple,
  },
});
