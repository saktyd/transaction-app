import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from '../../../constant';
import {SafeAreaView} from 'react-native-safe-area-context';

export default ({children}) => {
  return (
    <SafeAreaView edges={['bottom']}>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
        animated={true}
      />
      {children}
    </SafeAreaView>
  );
};
