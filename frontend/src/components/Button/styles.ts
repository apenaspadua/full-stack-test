import { theme } from 'core/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    alignSelf: 'center',
  },
  label: {
    color: theme.colors.white,
  }
});