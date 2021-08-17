import React, {useState, memo, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';
import gbStyle from '../../../styles';
import {Input} from '../../atoms';
import ArrowDownIcon from '../../../assets/icon/arrow-down.svg';
import SearchIcon from '../../../assets/icon/search.svg';
import {ModalPicker} from '../../molecules';

export default memo(({setKeyword, pickerValue, setPickerValue}) => {
  const optionsList = [
    'URUTKAN',
    'Nama A-Z',
    'Nama Z-A',
    'Tanggal Terbaru',
    'Tanggal Terlama',
  ];
  const [isVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onPressPickerItem = item => {
    if (pickerValue !== item.label) {
      setPickerValue(item);
    }
    setModalVisible(false);
  };

  const onPressPickerButton = () => {
    setModalVisible(true);
  };

  // Delaying search keyword input when user typing for minimizing parent re-render
  useEffect(() => {
    const handler = setTimeout(() => {
      setKeyword(inputValue);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setKeyword]);

  return (
    <>
      <ModalPicker
        {...{optionsList, isVisible, onPressPickerItem, pickerValue}}
      />
      <View style={styles.container}>
        <SearchIcon fill={COLORS.placeholder} height={20} width={20} />
        <Input
          defaultValue={inputValue}
          onChangeText={value => setInputValue(value)}
          placeholder="Cari nama, bank, atau nominal"
        />
        <TouchableOpacity
          style={gbStyle.rowYCenter}
          onPress={onPressPickerButton}>
          <Text style={styles.pickerText}>{pickerValue}</Text>
          <ArrowDownIcon fill={COLORS.primary} height={14} width={14} />
        </TouchableOpacity>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    ...gbStyle.cardContainer,
    ...gbStyle.rowYCenter,
    paddingVertical: 15,
    paddingLeft: 7,
    paddingRight: 15,
  },
  pickerText: {
    ...gbStyle.textStyle(14, COLORS.primary, 'bold'),
    paddingRight: 5,
  },
});
