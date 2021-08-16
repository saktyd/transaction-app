import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';
import {SafeAreaView} from 'react-native-safe-area-context';

export default ({children, style}) => {
  return (
    <SafeAreaView edges={['right', 'left']} style={[styles.container, style]}>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
        animated={true}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroud,
  },
});
