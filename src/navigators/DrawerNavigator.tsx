import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import StackNavigator from './StackNavigator';
import DrawerContent from '../components/DrawerContent';

export default () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
