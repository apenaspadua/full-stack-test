import { theme } from 'core/styles/theme';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  texts: {
    marginVertical: 24
  },
  hi: {
    marginBottom: 24
  },
  item: {
    width: 180,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    padding: 20,
    backgroundColor: theme.colors.secondary,
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 150,
  },
  row: {
    justifyContent: 'space-between'
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  arrow: {
    padding: 10
  }
});