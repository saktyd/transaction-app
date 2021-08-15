import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';
import gbStyle from '../../../styles';

export default ({selected}) => {
  return (
    <View style={styles.container}>
      {selected && <View style={styles.selectedRb} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: 16,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.primary,
    ...gbStyle.rowCenter,
  },
  selectedRb: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
});
