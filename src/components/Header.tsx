import { Ionicons } from "@expo/vector-icons"
import {  } from "@react-navigation/drawer"
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native"
import { DrawerWrapper } from "./DrawerWrapper";

export const Header = ({title}: {title:string}) => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return (        
        <View style={styles.container}>
            <TouchableOpacity onPress={openDrawer}>
                <Ionicons name="menu" size={32} color="#000"/>
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingLeft: 10
    }
})