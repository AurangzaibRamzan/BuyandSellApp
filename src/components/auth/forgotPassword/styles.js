import {StyleSheet} from 'react-native';

import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
  back: {
    width: '100%',
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  button: {
    paddingHorizontal: 60,
    marginBottom: 30,
    marginTop: 30,
  },
});

export default styles;
