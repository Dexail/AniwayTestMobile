import { Platform } from 'react-native';
import variables from 'assets/styles/variables';
import paddingUtil from 'utils/paddingUtil';
import { ScaledSheet } from 'react-native-size-matters';

const commonStyles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 'auto',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        bottom: 0,
      },
      android: {
        bottom: 35,
      },
      default: {
        bottom: 0,
      },
    }),
  },
  blockLogo:{
    height: 'auto',
    minHeight: 170,
    width: '100%',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  title: {
    marginTop: 23,
    textAlign: 'center',
    fontSize: '20@ms',
  },
  description: {
    marginTop: 8,
    fontSize: '16@ms',
    maxWidth: 210,
    textAlign: 'center',
  },
  price: {
    marginTop: 25,
  },
  priceValue: {
    fontSize: '45@ms',
    color: variables.coriousBlue,
  },
  buttonDefault: {
    minHeight: 50,
    borderRadius: 30,
  },
  button: {
    width: '100%',
    ...paddingUtil(0,16,16,16)
  },
  buttonHome: {
    width: '100%',
    marginTop: 35,
    ...paddingUtil(0,16,16,16)
  }
});

export default commonStyles;
