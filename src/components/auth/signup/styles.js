import {StyleSheet} from 'react-native';

import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
  button: {
    paddingHorizontal: 120,
    marginBottom: 30,
    marginTop: 30,
    width: '100%',
  },
});

export default styles;
