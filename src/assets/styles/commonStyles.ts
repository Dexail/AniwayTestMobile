import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const commonStyles = ScaledSheet.create({
  main: {
    flex: 1,
  },
  onBoardImg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  backPressBlock: {
    position: 'absolute',
    right: '5%',
    top: '6%'
  },
  header: {
    fontSize: '29@ms',
    color: variables.doveGray,
    lineHeight: 61,
  },
  mediumText: {
    fontSize: '20@ms',
    lineHeight: 40,
    fontWeight: '500',
    textAlign: 'center'
  },
  smallText: {
    fontSize: '14@ms',
    lineHeight: 10,
    color: variables.doveGray,
    fontWeight: '400',
  },
  subHeader: {
    fontSize: '16@ms',
    textAlign: 'center',
    color: variables.doveGray,
  },
  screen: {
    height: deviceHeight,
  },
  content: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    flexGrow: 1,
    flex: 1,
    alignSelf: 'stretch',
  },
  layout: {
    backgroundColor: variables.white,
    height: deviceHeight,
    width: deviceWidth,
    flex: 1,
  },
  layoutContentScroll: {
    height: deviceHeight,
    backgroundColor: variables.athensGray,
    flex: 1,
    width: deviceWidth,
  },

  layoutContent: {
    backgroundColor: variables.athensGray,
    flex: 1
  },

  //Fonts
  fontWeightLight: {
    color: variables.mineShaft,
    fontWeight: '400',
    fontFamily: 'Heebo-Light',
  },
  fontWeightMedium: {
    // color: variables.mineShaft,
    fontWeight: '500',
    fontFamily: 'Heebo-Medium',
  },
  fontWeightBold: {
    color: variables.mineShaft,
    fontFamily: 'Heebo-Bold',
    fontWeight: '700',
  },
  linkText: {
    color: variables.mainButton[1],
    borderBottomColor: variables.mainButton[1],
    borderBottomWidth: 1,
  },
  checkboxLoginAccept: {
    width: 19,
    height: 19
  },
  clearButton: {
    position: 'absolute',
    left: 8,
    top: 35,

  },
  wideButton: {
    width: '100%',
    height: 55,
    borderRadius: 25,
  },
  errorText: {
    fontSize: '16@ms',
    lineHeight: 25,
    color: variables.dangerButton[0],
    textAlign: 'center'
  },

  IconAuthCod: {
    fontSize: '21@ms',
    paddingRight: 6,
    color: variables.cerulean
  },
  Icon: {
    fontSize: '21@ms',
    marginRight: 6,
    color: variables.cerulean
  }
});

export default commonStyles;
