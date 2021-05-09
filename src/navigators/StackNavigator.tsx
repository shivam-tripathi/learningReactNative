import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderL from '../components/HeaderL';
import BottomTabNavigator from './BottomTabNavigator';

export default () => {
  const Stack = createStackNavigator();
  console.log('Stack navigator init');
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <HeaderL scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen name="Details" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
