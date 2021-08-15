import React from 'react';
import {TextInput} from 'react-native';
import {COLORS} from '../../../constant';

export default props => {
  return <TextInput {...props} placeholderTextColor={COLORS.placeholder} />;
};
