import React from 'react';
import {TouchableOpacity, Platform, Pressable} from 'react-native';
import {COLORS} from '../../../constant';

export default ({customRipple, children, ...props}) => {
  const defaultRipple = {
    color: COLORS.defaultRipple,
    borderless: false,
    radius: -10,
  };

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {children}
    </TouchableOpacity>
  ) : (
    <Pressable android_ripple={customRipple || defaultRipple} {...props}>
      {children}
    </Pressable>
  );
};
