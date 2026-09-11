import type { NavigatorScreenParams } from '@react-navigation/native';
import { ROUTES } from '@/constants/ROUTES';

export type AuthStackParamList = {
  [ROUTES.AUTH.WELCOME]: undefined;
  [ROUTES.AUTH.LOGIN]: undefined;
  [ROUTES.AUTH.REGISTER]: undefined;
  [ROUTES.AUTH.FORGOT_PASSWORD]: undefined;
  [ROUTES.AUTH.VERIFY_EMAIL]:
    | {
        email: string;
      }
    | undefined;
  [ROUTES.AUTH.RESET_PASSWORD]:
    | {
        token: string;
      }
    | undefined;
};

export type TabParamList = {
  [ROUTES.TABS.HOME]: undefined;
  [ROUTES.TABS.PLAY]: undefined;
  [ROUTES.TABS.GROUPS]: undefined;
  [ROUTES.TABS.FEED]: undefined;
  [ROUTES.TABS.RANKS]: undefined;
};

export type MainStackParamList = {
  [ROUTES.MAIN.TABS]: NavigatorScreenParams<TabParamList> | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, MainStackParamList {}
  }
}
