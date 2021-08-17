import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, TRS_STATUS} from '../../../constant';
import gbStyles from '../../../styles';
import {getDefaultDate, getRupiah} from '../../../utils';
import {BankRoute, Dot, PlatformButton, TransactionStatus} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

export default ({item}) => {
  const navigation = useNavigation();
  const {sender_bank, beneficiary_bank, status} = item;

  const onPress = () => {
    navigation.navigate('Detail Transaksi', item);
  };

  return (
    <PlatformButton style={styles.container} {...{onPress}}>
      <View style={styles.borderRightColor(item.status)} />
      <View style={styles.row}>
        <BankRoute {...{sender_bank, beneficiary_bank}} />
        <View style={gbStyles.rowYCenter}>
          <Text style={[styles.text, styles.beneficiaryName]} numberOfLines={1}>
            {item?.beneficiary_name.toUpperCase()}
          </Text>
          <TransactionStatus {...{status}} />
        </View>
        <View style={gbStyles.rowYCenter}>
          <Text style={styles.text}>{getRupiah(item?.amount)}</Text>
          <View style={{marginHorizontal: 2}}>
            <Dot />
          </View>
          <Text style={styles.text}>{getDefaultDate(item?.created_at)}</Text>
        </View>
      </View>
    </PlatformButton>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gbStyles.cardContainer,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  borderRightColor: status => ({
    backgroundColor:
      status === TRS_STATUS.SUCCESS ? COLORS.secondary : COLORS.primary,
    width: 5,
  }),
  row: {
    flex: 1,
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 10,
  },
  beneficiaryName: {flex: 1, paddingRight: 10},
  text: {
    ...gbStyles.textStyle(14),
    textAlignVertical: 'center',
  },
});
