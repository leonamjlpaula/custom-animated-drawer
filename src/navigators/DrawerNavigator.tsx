import { createDrawerNavigator } from "@react-navigation/drawer";
import { Orders } from "../screens/Orders";
import { TabNavigator } from "./TabNavigator";
import { CustomDrawer } from "../components/CustomDrawer";
import { Colors } from "../constants/colors";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          width: "50%",
        },
        drawerActiveTintColor: "#dc7864",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#3c2a3c",
        drawerItemStyle: { borderRadius: 16 },
        drawerLabelStyle: { fontSize: 22, fontWeight: "light" },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
  );
};
