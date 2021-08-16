import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, TRS_STATUS} from '../../../constant';
import gbStyles from '../../../styles';
import {getDefaultDate, getRupiah} from '../../../utils';
import {BankRoute, TransactionStatus} from '../../atoms';
import {useNavigation} from '@react-navigation/core';

export default ({item}) => {
  const navigation = useNavigation();
  const {
    sender_bank,
    beneficiary_bank,
    status,
    beneficiary_name,
    amount,
    created_at,
  } = item;

  const onPress = () => {
    navigation.navigate('Detail', item);
  };

  return (
    <TouchableOpacity style={styles.container(item.status)} {...{onPress}}>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <BankRoute {...{sender_bank, beneficiary_bank}} />
          <View style={gbStyles.rowYCenter}>
            <Text
              style={[styles.text, styles.beneficiaryName]}
              numberOfLines={1}>
              {beneficiary_name.toUpperCase()}
            </Text>
            <TransactionStatus {...{status}} />
          </View>
          <Text style={styles.text}>
            {getRupiah(amount)}
            <Text style={styles.dot}>.</Text>
            {getDefaultDate(created_at)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: status => ({
    ...gbStyles.cardContainer,
    backgroundColor:
      status === TRS_STATUS.SUCCESS ? COLORS.secondary : COLORS.primary,
    paddingLeft: 5,
  }),
  row: {
    ...gbStyles.rowYCenter,
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 10,
  },
  beneficiaryName: {flex: 1, paddingRight: 10},
  text: {
    ...gbStyles.textStyle(14),
    lineHeight: 22,
  },
  dot: {
    ...gbStyles.textStyle(30, 'black', 'bold'),
  },
});
