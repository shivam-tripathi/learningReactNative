import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ParamListBase, Route} from '@react-navigation/routers';
import {
  Scene,
  StackNavigationProp,
} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Appbar, Avatar, Text} from 'react-native-paper';

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: 'white',
    paddingVertical: 14,
  },
});

const Header = ({
  scene,
  previous,
  navigation,
}: {
  scene: Scene<Route<string, object | undefined>>;
  previous: Scene<Route<string, object | undefined>> | undefined;
  navigation: StackNavigationProp<ParamListBase, string>;
}) => {
  const {options} = scene.descriptor;
  const title = options.headerTitle || options.title || scene.route.name;
  return (
    <Appbar.Header focusable={true}>
      {previous ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <TouchableOpacity
          onPress={() =>
            ((navigation as any) as DrawerNavigationProp<{}>).openDrawer()
          }>
          <Avatar.Icon focusable={true} size={40} icon="menu" />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? title : <Text style={styles.heading}>Call Campainger</Text>
        }
        focusable={true}
        color="white"
      />
    </Appbar.Header>
  );
};

export default Header;
