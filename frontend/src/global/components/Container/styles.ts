import { theme } from 'global/styles/theme';
import { Platform, StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  content: {
    marginVertical: Platform.OS === 'android' ? 20 : 0
  }
});