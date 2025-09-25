import { createNativeStackNavigator } from "@react-navigation/native-stack"
import dashboardScreen from "../screens/home";

export type RootStackParamList = {
  dashboardScreen: undefined;
  loginScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="loginScreen">
      <Stack.Screen name="dashboardScreen" component={dashboardScreen} />
    </Stack.Navigator>
  )
}
