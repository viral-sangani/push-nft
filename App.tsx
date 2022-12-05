import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Navigator from "./navigations/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
