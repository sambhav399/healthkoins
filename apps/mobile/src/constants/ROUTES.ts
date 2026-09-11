export const ROUTES = {
  AUTH: {
    WELCOME: 'Welcome',
    LOGIN: 'Login',
    REGISTER: 'Register',
    FORGOT_PASSWORD: 'ForgotPassword',
    VERIFY_EMAIL: 'VerifyEmail',
    RESET_PASSWORD: 'ResetPassword'
  },
  MAIN: {
    TABS: 'Tabs'
  },
  TABS: {
    HOME: 'Home',
    PLAY: 'Play',
    GROUPS: 'Groups',
    FEED: 'Feed',
    RANKS: 'Ranks'
  }
} as const;

export default ROUTES;
