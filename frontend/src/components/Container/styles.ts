import { Platform, StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0
  }
});