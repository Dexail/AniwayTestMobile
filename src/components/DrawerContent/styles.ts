import { Dimensions, Platform } from 'react-native';
import variables from 'assets/styles/variables';
const deviceHeight = Dimensions.get("screen").height;
import { ScaledSheet } from 'react-native-size-matters';



const styles = ScaledSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    paddingVertical: 30,
  },
  drawerItemsContainer: {
    backgroundColor: variables.athensGray
  },
  drawerContentScrollView: {
    backgroundColor: variables.white
  },
  itemContainer: {
    marginBottom: -15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  itemLabel: {
    width: '100%',
    fontSize: '12@ms',
    color: variables.doveGray,
    paddingLeft: 15,
    textAlign: 'left',
  },
  exitContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    padding: 16,
    paddingBottom: 23,
    backgroundColor: variables.white,
    alignItems: "center"
  },
  exitIcon: {
    fontSize: 26,
    color: variables.cerulean
  },
  exitText: {
    color: variables.mineShaft,
    fontFamily: 'Heebo-Regular',
    marginLeft: '13@ms'
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
    fontSize: 26,
    color: "#6c7072"
  },
  userInfoName: {},
  userInfoNameFull: {
    fontSize: '13@ms',
    marginTop: 10,
    marginBottom: 3,
    marginLeft: 10
  },
  userInfoVehicle: {
    alignItems: "center"
  },
  userInfoVehicleNumber: {
    color: variables.info,
    fontSize: '13@ms',
    marginLeft: 10

  },
  exit: {
    marginTop: 'auto',
    ...Platform.select({
      ios: {
        marginBottom: 10,
      },
      android: {
        marginBottom: 20,
      },
      default: {
        marginBottom: 20,
      },
    }),

  },
  drawerMenuContainer: {
    marginTop: 16,
    height: deviceHeight - 150,
    zIndex: 9,
    padding: 16,
    backgroundColor: variables.white,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  carIcon: {
    width: 135,
    height: 65,
    marginTop: -20,
    fontSize: 24
  },
  geolocationContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 39,
    borderRadius: 9,
    minHeight: 160,
    backgroundColor: variables.athensGray,
  },
  geolocationContainerSwitcher: {
    marginTop: 10,
  },
  geolocationText: {
    marginTop: 10,
    fontFamily: 'Heebo-Regular',
    textAlign: 'center',
  }
});

export default styles;
