import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import gbStyles from '../../../styles';
import ArrowRightIcon from '../../../assets/icon/right-arrow';
import {getBankName} from '../../../utils';

// component for label bank route label. Ex: 'BRI => BTPN' / Mandiri => BCA
export default ({sender_bank, beneficiary_bank}) => {
  return (
    <View style={gbStyles.rowYCenter}>
      <Text style={styles.text}>{getBankName(sender_bank)}</Text>
      <View style={{paddingHorizontal: 5}}>
        <ArrowRightIcon fill={'black'} height={12} width={12} />
      </View>
      <Text style={styles.text}>{getBankName(beneficiary_bank)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...gbStyles.textStyle(16, 'black', 'bold'),
  },
});
