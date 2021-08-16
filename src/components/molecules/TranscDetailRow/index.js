import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import gbStyles from '../../../styles';

export default ({
  textBoldRight,
  textBoldLeft,
  textRight,
  textLeft,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{flex: 0.65}}>
        <Text style={styles.textBold}>{textBoldLeft}</Text>
        <Text style={styles.text}>{textLeft}</Text>
      </View>
      <View style={{flex: 0.35}}>
        <Text style={styles.textBold}>{textBoldRight}</Text>
        <Text style={styles.text}>{textRight}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  textBold: {
    ...gbStyles.textStyle(14, 'black', 'bold'),
  },
  text: {
    ...gbStyles.textStyle(14, 'black'),
  },
});
