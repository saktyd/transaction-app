import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MainContainer} from '../../components';

export default ({navigation}) => {
  return (
    <MainContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Transaction List</Text>
      </TouchableOpacity>
    </MainContainer>
  );
};
