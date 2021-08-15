import React, {useState} from 'react';
import {View} from 'react-native';
import {MainContainer, TransactionSearch} from '../../components';

export default ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [pickerValue, setPickerValue] = useState('URUTKAN');
  return (
    <MainContainer>
      <View style={{padding: 7}}>
        <TransactionSearch
          {...{
            inputValue,
            setInputValue,
            pickerValue,
            setPickerValue,
          }}
        />
      </View>
    </MainContainer>
  );
};
