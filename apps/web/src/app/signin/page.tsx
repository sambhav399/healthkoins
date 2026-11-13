import ROUTES from '@/constants/ROUTES';
import AuthSignIn from '../../components/AuthSignIn';

export const metadata = {
  title: ROUTES.SIGN_IN.title,
  description: ROUTES.SIGN_IN.description
};

export default function SignIn() {
  return <AuthSignIn />;
}
