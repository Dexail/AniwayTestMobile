import { Dimensions } from 'react-native';
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = ScaledSheet.create({
  mainCointainer: {
    height: '100%',
  },
  section: {
    marginTop: 5,
    padding: 10,

  },
  sectionTitle: {

  },
  sectionTitleText: {
    textAlign: 'left',
    color: variables.mineShaft,
    fontFamily: 'Heebo-Regular',
    fontSize: '15@ms',
    marginBottom: 5,

  },
  notificationView: {
    width: "100%"
  },

  notificationContainer: {
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: variables.athensGray,
    borderColor: variables.gallery,
    borderRadius: 9,

  },
  notificationContainerNew: {
    backgroundColor: variables.linkWater,
    borderColor: variables.geyser

  },
  notificationContainerDisabled: {
    backgroundColor: variables.gallery,
    borderColor: variables.alto,
  },
  notificationInfo: {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 10
  },
  notificationHeader: {
    justifyContent: 'space-between',
  },
  notificationHeaderTitle: {
    color: variables.mineShaft,
    marginLeft: 6,
    fontFamily: 'Heebo-Bold',
    fontWeight: '600',
    fontSize: '16@ms',},
  notificationHeaderTime: {
    color: variables.doveGray,
    fontFamily: 'Heebo-Regular',
    fontWeight: '400',
    fontSize: '14@ms',},
  notificationAddress: {
    alignItems: 'center',
  },
  notificationAddressText: {
    color: variables.mineShaft,
    fontFamily: 'Heebo-Regular',
    fontWeight: '400',
    marginLeft: 5,
    fontSize: '14@ms',

  },
  notificationFooterButton: {
    marginLeft: 15,
  },
  notificationFooterButtonCan: {
  },
  notificationLine: {
    marginLeft: 1,
  },

  notificationFooter: {
    justifyContent: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    borderColor: variables.gallery,

  },
  notificationContainerEmpty: {
    height: deviceHeight - 280,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconNotificationEmpty: {
    margin: 10,
  },
  notificationEmptyValue: {
    marginTop: 13,
    fontSize: '14@ms',
    fontFamily: 'Heebo-Regular',
    color: variables.mineShaft
  }
});
export default styles;
