import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import BottomTabNavigator from "./navigations/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
