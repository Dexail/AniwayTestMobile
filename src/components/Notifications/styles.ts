import { StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';

const styles = StyleSheet.create({
  info: {
    height: 50,
    backgroundColor: variables.info,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  success: {
    height: 50,
    backgroundColor: variables.main,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  error: {
    height: 50,
    backgroundColor: variables.danger,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  commonStyle: {
    height: 50,
    borderLeftWidth: 0,
  },
  textStyle: {
    lineHeight: 20,
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Heebo-Medium',
    color: variables.white,
    textAlign: 'center',
  }
});

export default styles;
