import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';

export default ({style, ...props}) => {
  return (
    <TextInput
      {...props}
      style={[styles.defaultStyle, style]}
      placeholderTextColor={COLORS.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 14,
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 0,
    color: 'black',
  },
});
