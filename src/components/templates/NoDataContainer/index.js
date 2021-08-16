import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../../constant';
import styles from '../../../styles';

export default () => {
  return (
    <View style={[styles.rowCenter, {flex: 1}]}>
      <Text style={styles.textStyle(20, COLORS.placeholder, 'bold')}>
        No Data
      </Text>
    </View>
  );
};
