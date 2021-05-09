import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ScreenNames} from '../screen/common';
import CampaignScreen from '../screen/CampaignScreen';
import HomeScreen from '../screen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from '../screen/LoginScreen';
import {theme} from '../core/theme';

export default () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.HomeScreen}
      shifting={true}
      barStyle={{backgroundColor: theme.colors.primary}}
      sceneAnimationEnabled={true}>
      <Tab.Screen
        key={ScreenNames.HomeScreen}
        name="Dash"
        component={HomeScreen}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        key={ScreenNames.CampaignScreen}
        component={CampaignScreen}
        name="Campaigns"
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="campaign" size={24} />
          ),
        }}
      />
      <Tab.Screen
        key={ScreenNames.DashboardScreen}
        name="Teams"
        component={LoginScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="people-alt" size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
