import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/colors";
import { ROUTES } from "../constants/routes";
import Bookmarks from "../screens/Bookmarks";
import Home from "../screens/Home";
import { navHeader } from "../styles/containers";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({ route }) => ({
        headerStyle: navHeader,
        headerTintColor: COLORS.white,
        tabBarActiveTintColor: COLORS.primary800,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === ROUTES.HOME) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BOOKMARKS) {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.BOOKMARKS} component={Bookmarks} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
