import {
  NotoSans_400Regular,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-gesture-handler";
import BottomTabNavigator from "./navigations/BottomTabNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // Loading the fonts
  let [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
  });

  // Callback to hide the splash screen
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // If the fonts are not loaded, we render an empty view
  if (!fontsLoaded) {
    return null;
  }

  // If the fonts are loaded, we render the app
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
