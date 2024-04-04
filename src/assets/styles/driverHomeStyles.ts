import { Dimensions } from 'react-native';
import paddingUtil from 'utils/paddingUtil';
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = ScaledSheet.create({
  mainCointainer: {
    height: '100%',
  },
  headerActionsContainer: {
    width: '100%',
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 6,
    paddingLeft: 10,
    top: '1%',
    zIndex: 1
  },
  headerActionsBlock: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  userContainerNot: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: variables.white,
    alignItems: "center",
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  userContainer: {
    padding: 16,
    backgroundColor: variables.white,
    alignItems: "center",
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  userInfoClose: {
    position: "absolute",
    right: 16,
    top: 10,
  },
  userInfoBlock: {
    alignItems: 'center'
  },
  userPhoto: {
    marginTop: 5,
    width: 50,
    height: 50,
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
  },
  userInfoCloseIcon: {
    fontSize: '16@ms',
    color: "#6c7072"
  },
  userInfoNameOnline: {
    width: deviceWidth - 150,
    justifyContent: 'space-between'
  },
  userInfoName: {
    width: deviceWidth - 100,
    justifyContent: 'space-between'
  },
  userInfoOnline: {
    color: variables.mineShaft,
    fontFamily: 'Heebo-Bold',
    fontWeight: '500',
    fontSize: '19@ms',
    marginTop: 10,
    marginBottom: 3,
    marginLeft: 10
  },
  userInfoNameFull: {
    color: variables.mineShaft,
    fontFamily: 'Heebo-Regular',
    fontSize: '16@ms',
    marginTop: 10,
    marginBottom: 3,
    marginLeft: 10
  },
  userInfoNameFullOfl: {
    color: variables.mineShaft,
    fontFamily: 'Heebo-Regular',
    fontSize: '19@ms',
    marginTop: 10,
    marginBottom: 3,
    marginLeft: 10
  },
  userInfoVehicle: {
    alignItems: "center"
  },
  userInfoVehicleNumber: {
    color: variables.info,
    fontSize: '14@ms',
    marginLeft: 10

  },
  container: {
    backgroundColor: variables.athensGray,
    marginTop: 'auto',
    maxHeight: deviceHeight - 32,
    padding: 15,
  },
  containerOrderNot: {
    backgroundColor: variables.white,
    marginTop: 'auto',
    height: 105,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 15,
    zIndex: 999,
  },
  containerOrder: {
    backgroundColor: variables.white,
    marginTop: 'auto',
    height: 140,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 15,
    zIndex: 999,
  },
  icon: {
    textAlign: 'center',
  },
  containerNextOrderDetails: {
  },
  headerBlockInfo: {
    width: '100%',
    textAlign: 'left',
    ...paddingUtil(4, 0, 25, 0)
  },
  headerBlockInfoTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Heebo-Regular',
  },
  headerBlockInfoText: {
    textAlign: 'left',
    fontFamily: 'Heebo-Regular',
  },
  containerNextOrder: {
    marginTop: 5,
  },
  containerNextOrderHeader: {
    justifyContent: 'space-between'
  },
  containerNextOrderHeaderInfo: {
    alignItems: 'center'
  },
  geolocationContainerBurger: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: variables.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    zIndex: 3,
  },
  geolocationContainerNotifications: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: variables.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    zIndex: 3,
  },
  geolocationContainerProfile: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: variables.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    zIndex: 3,
  },
  geolocationContainerIncomeForToday: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: 40 }],
    width: 115,
    height: 40,
    borderRadius: 10,
    backgroundColor: variables.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    zIndex: 3
  },
  geolocationContainerIncomeForTodayLabel: {
    color: variables.mineShaft,
    fontSize: '13@ms',
    fontFamily: 'Heebo-Bold',
  },
  geolocationContainerIncomeForTodayText: {
    color: "rgba(0, 125, 255, 1)",
    fontFamily: 'Heebo-Bold',
    lineHeight: 19,
    fontSize: '14@ms'
  },
  geolocationContainerSwitcher: {
    width: 50,
    zIndex: 3
  },
  containerNextOrderHeaderTitle: {
    fontFamily: 'Heebo-Regular',
    color: variables.doveGray
  },
  containerNextOrderHeaderText: {
    fontFamily: 'Heebo-Regular',
    color: 'rgba(0, 123, 181, 1)',
    paddingRight: 6
  }
});
export default styles;
