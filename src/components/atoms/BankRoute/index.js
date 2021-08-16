import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import gbStyles from '../../../styles';
import ArrowRightIcon from '../../../assets/icon/right-arrow';
import {getBankName} from '../../../utils';

// component for label bank route label. Ex: 'BRI => BTPN' / Mandiri => BCA
export default ({sender_bank, beneficiary_bank, size}) => {
  const iconProps = {
    fill: 'black',
    height: size ? size - 2 : 14, // size default = 14
    width: size ? size - 2 : 14,
  };
  return (
    <View style={gbStyles.rowYCenter}>
      <Text style={styles.text(size)}>{getBankName(sender_bank)}</Text>
      <View style={{paddingHorizontal: 5}}>
        <ArrowRightIcon {...{...iconProps}} />
      </View>
      <Text style={styles.text(size)}>{getBankName(beneficiary_bank)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: size => ({
    ...gbStyles.textStyle(size || 16, 'black', 'bold'), // size default = 16
  }),
});
