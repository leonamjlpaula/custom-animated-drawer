import { useDrawerProgress } from "@react-navigation/drawer";
import { ReactNode } from "react";
import {Dimensions, StyleSheet, View} from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

export const DrawerWrapper = ({children}: {children: ReactNode}) => {

const deviceWidth = Dimensions.get('window').width
    
const drawerProgress = useDrawerProgress()

const animatedStyle = useAnimatedStyle(() => (
    {
        transform: [            
            {translateX: interpolate(drawerProgress.value, [0,1], [0, deviceWidth/2-120], 'clamp')},
            {rotateZ: `${interpolate(drawerProgress.value, [0,1], [0, -10], 'clamp')}deg`},
        ],
        scale: interpolate(drawerProgress.value, [0, 1], [1, 0.8], 'clamp'),
        borderRadius: interpolate(drawerProgress.value, [0, 1], [0, 24], 'clamp'),
        overflow: 'hidden'
    }
))

const backgroundStyle = useAnimatedStyle(() => (
    {transform:[{translateY: interpolate(drawerProgress.value, [0,1], [0, 60], 'clamp')}],}
))

    return(
        <Animated.View style={[StyleSheet.absoluteFill, styles.backgroundView, backgroundStyle]}> 
            <Animated.View style={[styles.container, animatedStyle]}>
                {children}
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundView: {
    backgroundColor: '#280cb3',
  }
});