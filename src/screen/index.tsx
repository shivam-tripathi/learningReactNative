import {StackNavigationProp} from '@react-navigation/stack';
import {MemoExoticComponent, ReactElement} from 'react';
import CampaignScreen from './CampaignScreen';
import {RootStackParamsList, ScreenName, ScreenNames} from './common';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import RegisterScreen from './RegisterScreen';
import DashboardScreen from './DashboardScreen';

type NavComponent = (props: {
  navigation?: StackNavigationProp<RootStackParamsList, ScreenName>;
}) => ReactElement;

interface ScreenDetails {
  name: ScreenName;
  component: NavComponent | MemoExoticComponent<NavComponent>;
}

const screens: {[_: string]: ScreenDetails} = {
  home: {
    name: ScreenNames.HomeScreen,
    component: HomeScreen,
  },
  campaigns: {
    name: ScreenNames.CampaignScreen,
    component: CampaignScreen,
  },
  login: {
    name: ScreenNames.LoginScreen,
    component: LoginScreen as MemoExoticComponent<NavComponent>,
  },
  forgotPassword: {
    name: ScreenNames.ForgotPasswordScreen,
    component: ForgotPasswordScreen as MemoExoticComponent<NavComponent>,
  },
  register: {
    name: ScreenNames.RegisterScreen,
    component: RegisterScreen as MemoExoticComponent<NavComponent>,
  },
  dashboard: {
    name: ScreenNames.DashboardScreen,
    component: DashboardScreen as MemoExoticComponent<NavComponent>,
  },
};

export default screens;
