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
    headerTitleAlign: 'center',
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
      initialRouteName={'Transaction List'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        presentation: 'card',
      }}>
      <Stack.Screen
        name="Transaction List"
        component={TransactionList}
        {...{options}}
      />
      <Stack.Screen name="Detail" component={Detail} {...{options}} />
    </Stack.Navigator>
  );
};
