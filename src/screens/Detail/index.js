import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BankRoute, MainContainer, TranscDetailRow} from '../../components';
import gbStyles from '../../styles';
import CopyIcon from '../../assets/icon/copy.svg';
import {COLORS} from '../../constant';
import {getDefaultDate, getRupiah} from '../../utils';

export default ({route, navigation}) => {
  const data = route?.params;

  const onPressClose = () => {
    navigation.goBack();
  };
  return (
    <MainContainer style={{paddingTop: 15}}>
      <View style={[styles.card, gbStyles.rowYCenter, {marginBottom: 1}]}>
        <Text style={[styles.textBold, {marginRight: 5}]}>
          ID TRANSAKTI: #{data.id}
        </Text>
        <CopyIcon fill={COLORS.primary} height={16} width={16} />
      </View>
      <View style={[styles.card, gbStyles.rowYCenter, {marginBottom: 2}]}>
        <Text style={[styles.textBold, {flex: 1}]}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={onPressClose}>
          <Text style={gbStyles.textStyle(14, COLORS.primary)}>Tutup</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.card]}>
        <BankRoute {...{...data, size: 18}} />
        <TranscDetailRow
          textBoldLeft={data.beneficiary_name.toUpperCase()}
          textLeft={data.account_number}
          textBoldRight="NOMINAL"
          textRight={getRupiah(data.amount)}
          containerStyle={{marginTop: 10}}
        />
        <TranscDetailRow
          textBoldLeft="BERITA TRANSFER"
          textLeft={data.remark}
          textBoldRight="KODE UNIK"
          textRight={data.unique_code}
        />
        <TranscDetailRow
          textBoldLeft="WAKTU DIBUAT"
          textLeft={getDefaultDate(data.created_at)}
          containerStyle={{paddingBottom: 0}}
        />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    ...gbStyles.cardContainer,
    borderRadius: 0,
    padding: 20,
  },
  textBold: {
    ...gbStyles.textStyle(14, 'black', 'bold'),
  },
});
