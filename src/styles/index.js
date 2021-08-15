import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textStyle: (size, color, weight) => ({
    fontSize: size || 14,
    color: color || 'black',
    fontWeight: weight || 'normal',
  }),
  rowYCenter: {flexDirection: 'row', alignItems: 'center'},
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
  },
});
