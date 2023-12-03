import { theme } from 'core/styles/theme';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  container: {
    width: '100%', 
    height: 54,
    borderRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.inputColor,
    borderWidth: 1,
    marginBottom: 10
  },
  input: {
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.primary,
    paddingVertical: 10
  },
  error: {
    color: theme.colors.error,
    top: -10,
    left: 10
  }
});