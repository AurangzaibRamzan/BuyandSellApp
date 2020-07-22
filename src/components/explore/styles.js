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
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
  },
  price: {fontSize: 17, fontWeight: '600'},
  location: {fontSize: 17, fontWeight: '400'},
  lowerText: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 4,
  },
  filterDiv: {
    paddingVertical: 7,
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
  },
  filterIcon: {
    marginRight: 20,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 18,
    color: 'black',
    padding: 5,
  },
});

export default style;
