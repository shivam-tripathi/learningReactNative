import React, {useContext} from 'react';
import {Text} from 'react-native';
import {AppContext, AppContextStruct} from '../core/context';
import {getString} from '../core/strings';

export const String = (props: {id: string; textStyle?: any}) => {
  const {lang} = useContext(AppContext) as AppContextStruct;
  const {id, textStyle = {}} = props;
  return <Text style={textStyle}>{getString(id, lang)}</Text>;
};
