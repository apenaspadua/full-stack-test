import { theme } from 'core/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: theme.colors.toastError,
    width: '90%',
    position: 'absolute',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: theme.colors.shadowError,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    alignSelf: 'center'
  },
  icon: {
    marginRight: 16
  },
  text: {
    width: '90%',
    color: theme.colors.error,
    fontSize: 16,
  }
});
