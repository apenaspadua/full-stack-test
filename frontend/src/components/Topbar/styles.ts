import { Platform, StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
    marginHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
});