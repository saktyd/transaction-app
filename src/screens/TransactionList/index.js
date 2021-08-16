import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {
  MainContainer,
  TransactionSearch,
  TransactionCard,
} from '../../components';

export default ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [pickerValue, setPickerValue] = useState('URUTKAN');

  const list = [
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'SUCCESS',
      sender_bank: 'bni',
      account_number: '6413057461',
      beneficiary_name:
        'Beck Glover Beck Glover Beck Glover Beck Glover Beck Glover Beck Glover Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'SUCCESS',
      sender_bank: 'bni',
      account_number: '6413057461',
      beneficiary_name: 'Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'PENDING',
      sender_bank: 'Mandiri',
      account_number: '6413057461',
      beneficiary_name: 'Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'PENDING',
      sender_bank: 'Mandiri',
      account_number: '6413057461',
      beneficiary_name: 'Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'PENDING',
      sender_bank: 'Mandiri',
      account_number: '6413057461',
      beneficiary_name: 'Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'PENDING',
      sender_bank: 'Mandiri',
      account_number: '6413057461',
      beneficiary_name: 'Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'PENDING',
      sender_bank: 'Mandiri',
      account_number: '6413057461',
      beneficiary_name: 'Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
    {
      id: 'FT8865',
      amount: 3390412,
      unique_code: 752,
      status: 'PENDING',
      sender_bank: 'Mandiri',
      account_number: '6413057461',
      beneficiary_name: 'Beck Glover',
      beneficiary_bank: 'bri',
      remark: 'sample remark',
      created_at: '2021-08-09 08:38:41',
      completed_at: '2021-08-15 16:38:41',
      fee: 0,
    },
  ];
  return (
    <MainContainer style={{padding: 7}}>
      <TransactionSearch
        {...{
          inputValue,
          setInputValue,
          pickerValue,
          setPickerValue,
        }}
      />
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <TransactionCard {...{item}} />}
        contentContainerStyle={{flexGrow: 1, paddingVertical: 7}}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
      />
    </MainContainer>
  );
};
