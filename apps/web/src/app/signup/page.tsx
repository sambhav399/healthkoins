import ROUTES from '@/constants/ROUTES';
import AuthSignUp from '../../components/AuthSignUp';

export const metadata = {
  title: ROUTES.SIGN_UP.title,
  description: ROUTES.SIGN_UP.description
};

export default function SignUp() {
  return <AuthSignUp />;
}
