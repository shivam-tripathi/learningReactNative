import React, {memo} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './common';

type Props = {
  navigation: StackNavigationProp<RootStackParamsList, 'DashboardScreen'>;
};

const Dashboard = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('HomeScreen')}
      focusable={true}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
