import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bookmarks from "../screens/Bookmarks";
import Home from "../screens/Home";
import { COLORS } from "../utils/colors";
import { ROUTES } from "../utils/routes";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({ route }) => ({
        headerStyle: {
          shadowColor: "transparent",
          backgroundColor: COLORS.primary800,
        },
        headerTintColor: COLORS.white,
        tabBarShowLabel: false,

        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BOOKMARKS) {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }
          return (
            <Ionicons name={iconName} size={24} color={COLORS.primary800} />
          );
        },
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.BOOKMARKS} component={Bookmarks} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
