import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  messageContainer: {
    position: 'absolute',
    top: 19,
    width: "100%",
    left: 0,
    padding: 10,
    right: 0,
  },
  messageBlockInfo: {
    alignItems: 'flex-start',
    width: "100%",
    padding: 16,
    borderRadius: 15,
  },
  messageBlockInfoTouchble: {
    width: "100%",
  },
  messageBlockInfoBlur: {
    position: 'absolute',
    padding: 15,
    borderRadius: 15,
    width: "100%",
    height: "100%"
  },
  messageLogoInfoBlock: {
    alignItems: "center"
  },
  messageLogoInfoOrderDivide: {
    maxHeight: 1,
    height: 1,
    marginTop: 10,
    width: "100%",
    backgroundColor: variables.gray
  },
  messageLogoInfoOrder: {
    alignItems: "center"
  },

  logoMiniIcon: {
    maxWidth: 18,
  },

  originMiniIcon: {
    maxWidth: 20,
  },
  titleLogo: {
    fontFamily: 'Heebo-Regular',
    fontSize: '13@ms',
    color: variables.gray,
    marginLeft: 10,

  },
  timeLogo: {
    fontFamily: 'Heebo-Regular',
    fontSize: '13@ms',
    color: variables.gray,
    marginLeft: 10,

  },
  originLogo: {
    fontFamily: 'Heebo-Regular',
    fontSize: '13@ms',
    color: variables.gray,
    marginLeft: 10,

  },
  originLogoBlock: {
    marginTop: 9,
    alignItems: "flex-start"

  },
  originValueLogo: {
    fontFamily: 'Heebo-Regular',
    fontSize: '15@ms',
    color: variables.mineShaft,
    marginLeft: 9,


  },
  messageLogoInfoSeparate: {
    backgroundColor: variables.mineShaft,
    width: 3,
    height:3,
    marginLeft: 9,
    borderRadius: 50,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default styles;
