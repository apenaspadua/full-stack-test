import { theme } from 'core/styles/theme';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  image: {
    width: 220,
    height: 70,
    alignSelf: 'center',
    top: '25%',
  },
  footer: {
    backgroundColor: theme.colors.secondary,
    width: '100%',
    height: '40%',
    position: 'absolute', 
    bottom: 0, 
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 30
  },
  texts: {
    flex: 1,
    marginTop: 20
  }
});