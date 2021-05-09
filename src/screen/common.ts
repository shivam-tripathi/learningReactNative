export const ScreenNames: Record<ScreenName, ScreenName> = {
  HomeScreen: 'HomeScreen',
  CampaignScreen: 'CampaignScreen',
  LoginScreen: 'LoginScreen',
  ForgotPasswordScreen: 'ForgotPasswordScreen',
  RegisterScreen: 'RegisterScreen',
  DashboardScreen: 'DashboardScreen',
} as const;

// type ValueOf<T> = T[keyof T];

export type ScreenName = keyof RootStackParamsList;

export type RootStackParamsList = {
  HomeScreen: undefined;
  CampaignScreen: undefined;
  LoginScreen: (scene: string) => void;
  ForgotPasswordScreen: undefined;
  RegisterScreen: undefined;
  DashboardScreen: undefined;
};
