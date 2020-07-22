import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  itemWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 13,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  itemImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
  },
  price: {fontSize: 15, fontWeight: '600'},
  location: {fontSize: 15, fontWeight: '400'},
  lowerText: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 4,
  },
});

export default style;
