import React from 'react';
import {View, Text, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import gbStyle from '../../../styles';
import {RadioButton} from '../../atoms';

export default ({isVisible, onPressPickerItem, optionsList, pickerValue}) => {
  return (
    <Modal
      {...{isVisible}}
      backdropOpacity={0.6}
      useNativeDriver={Platform.OS === 'android'}
      style={{alignItems: 'center'}}>
      <View style={[gbStyle.cardContainer, styles.container]}>
        {optionsList &&
          optionsList.map((item, i) => (
            <TouchableOpacity
              style={styles.list}
              key={i}
              onPress={() => onPressPickerItem(item)}>
              <RadioButton selected={pickerValue === item} />
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: 25,
  },
  list: {
    ...gbStyle.rowYCenter,
    paddingVertical: 15,
  },
  text: {
    ...gbStyle.textStyle(14),
    flex: 1,
    paddingLeft: 10,
  },
});
