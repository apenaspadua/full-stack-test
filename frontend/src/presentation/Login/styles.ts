import { theme } from 'core/styles/theme';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  texts: {
    marginHorizontal: 20
  },
  content: {
    flex: 1,
    top: '5%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 24    
  }
});