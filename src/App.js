import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './config/navigator';
import {Provider} from 'react-redux';
import reduxsStore from './config/redux/store';

export default () => {
  return (
    <Provider store={reduxsStore}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
