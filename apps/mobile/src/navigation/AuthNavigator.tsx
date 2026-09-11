import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@/constants/ROUTES';
import ForgotPassword from '@/screens/Auth/ForgotPassword';
import Login from '@/screens/Auth/Login';
import Register from '@/screens/Auth/Register';
import ResetPassword from '@/screens/Auth/ResetPassword';
import VerifyEmail from '@/screens/Auth/VerifyEmail';
import Welcome from '@/screens/Auth/Welcome';
import type { AuthStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.AUTH.WELCOME}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ROUTES.AUTH.WELCOME} component={Welcome} />
      <Stack.Screen name={ROUTES.AUTH.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.AUTH.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.AUTH.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.AUTH.VERIFY_EMAIL} component={VerifyEmail} />
      <Stack.Screen name={ROUTES.AUTH.RESET_PASSWORD} component={ResetPassword} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
