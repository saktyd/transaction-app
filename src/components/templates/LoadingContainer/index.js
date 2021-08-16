import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../../constant';
import styles from '../../../styles';

export default () => {
  return (
    <View style={[styles.rowCenter, {flex: 1}]}>
      <ActivityIndicator color={COLORS.primary} size="large" />
    </View>
  );
};
