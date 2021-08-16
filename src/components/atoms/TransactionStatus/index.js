import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getTrsStatus} from '../../../utils';
import gbStyles from '../../../styles';
import {COLORS, TRS_STATUS} from '../../../constant';

// Label Transaction Status. Ex: 'Berhasil / Pengecekan'
export default ({status}) => {
  return (
    <View style={[gbStyles.cardContainer, styles.container(status)]}>
      <Text style={styles.text(status)}>{getTrsStatus(status)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: status => ({
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: status === TRS_STATUS.SUCCESS ? '' : COLORS.primary,
    borderWidth: status === TRS_STATUS.SUCCESS ? 0 : 1,
    backgroundColor: status === TRS_STATUS.SUCCESS ? COLORS.secondary : 'white',
  }),
  text: status => ({
    ...gbStyles.textStyle(
      14,
      status === TRS_STATUS.SUCCESS ? 'white' : 'black',
      'bold',
    ),
  }),
});
