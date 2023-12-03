import { theme } from 'core/styles/theme';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  texts: {
    alignSelf: 'center'
  },
  contentImage: {
    justifyContent: 'center',
    alignItems: 'baseline',
    zIndex: 99,
    right: 90
  },
  image: {
    width: 200,
    height: 400,
  },
  cotainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  content: {
    padding: 20,
    width: '80%',
    backgroundColor: theme.colors.secondary, 
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },
  footer: {
    position: 'absolute', 
    bottom: 20,
    alignSelf: 'center'
  }
});