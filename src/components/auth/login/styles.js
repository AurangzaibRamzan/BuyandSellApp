import {StyleSheet} from 'react-native';

import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
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
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  button: {
    paddingHorizontal: 120,
    marginBottom: 30,
    width: '100%',
  },
});

export default styles;
