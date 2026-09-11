import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@/constants/ROUTES';
import TabNavigator from '@/navigation/TabNavigator';
import type { MainStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.MAIN.TABS} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
