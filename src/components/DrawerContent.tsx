import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Title,
  TouchableRipple,
  Text,
  Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawer}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1296772483018682378/BERKvdwG_400x400.jpg',
            }}
            size={50}
            focusable={true}
          />
          <Title style={styles.title}>Shivam Tripathi</Title>
          <Caption style={styles.caption}>@aShivamTripathi</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.caption, styles.paragraph]}>
                202
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.caption, styles.paragraph]}>
                144
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section focusable={true}>
          <DrawerItem
            icon={({size, color}) => {
              return (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              );
            }}
            onPress={() => {}}
            label="Profile"
          />
          <DrawerItem
            onPress={() => {}}
            label="Preferences"
            icon={({color, size}) => {
              return (
                <MaterialCommunityIcons name="tune" color={color} size={size} />
              );
            }}
          />
          <DrawerItem
            onPress={() => {}}
            label="Bookmarks"
            icon={({color, size}) => {
              return (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              );
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences" focusable={true}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} focusable={true} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <Switch value={false} focusable={true} />
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
