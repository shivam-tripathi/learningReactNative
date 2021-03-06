import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';

export default () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
