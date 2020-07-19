import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from '../../utils/statusBarHeight';

const styles = StyleSheet.create({
  scroll: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});

export default styles;
