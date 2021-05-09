import React from 'react';
import {Appbar} from 'react-native-paper';

export default function CustomNavigationBar() {
  return (
    <Appbar.Header focusable={false}>
      <Appbar.Content title="Call Campainer" focusable={false} />
    </Appbar.Header>
  );
}
