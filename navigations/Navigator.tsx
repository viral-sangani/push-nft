import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants/routes";
import Home from "../screens/Home";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
}

export default Navigator;
