import React from 'react';
import {View, StyleSheet} from 'react-native';

export default () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: 5,
    height: 5,
    borderRadius: 5,
  },
});
