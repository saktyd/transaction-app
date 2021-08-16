import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {TransactionList, Detail} from '../../screens';
import {COLORS} from '../../constant';

const Stack = createStackNavigator();

export default () => {
  const options = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: COLORS.primary,
    },
    headerBackTitle: '',
    headerTitleStyle: {
      color: 'white',
    },
  };
  return (
    <Stack.Navigator
      initialRouteName={'List Transaksi'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        presentation: 'card',
      }}>
      <Stack.Screen
        name="List Transaksi"
        component={TransactionList}
        {...{options}}
      />
      <Stack.Screen name="Detail Transaksi" component={Detail} {...{options}} />
    </Stack.Navigator>
  );
};
