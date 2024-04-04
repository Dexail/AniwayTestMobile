import paddingUtil from 'utils/paddingUtil';
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const driverFooterStyles = ScaledSheet.create({
  content: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    elevation: 3,
    shadowColor: variables.blackSuperLight,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 1,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    position: 'relative',
    paddingRight: '10%',
    paddingLeft: '10%'
  },
  navElementSelected: {
    color: variables.cerulean,
  },
  navElementSelectedAfter: {
    width: 24,
    height: 3,
    backgroundColor: variables.cerulean,
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{ translateX: 16 }, { translateY: 0 }],
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  disableLink: {
    opacity: .3,
  },
  navElement: {
    width: 56,
    height: 71,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...paddingUtil(8, 1, 8, 1),
  },
  navElementIcon: {
    fontSize: '20@ms',
    color: variables.doveGray,
  },
  navElementTitle: {
    fontSize: '13@ms',
    marginTop: 6,
    fontWeight: '400',
    color: variables.doveGray,
    letterSpacing: 0.4
  }
});

export default driverFooterStyles;
