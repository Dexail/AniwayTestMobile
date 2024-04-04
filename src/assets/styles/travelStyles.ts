import { Dimensions } from 'react-native';
import variables from 'assets/styles/variables';
import paddingUtil from 'utils/paddingUtil';
import { ScaledSheet } from 'react-native-size-matters';
const deviceWidth = Dimensions.get('window').width;
const styles = ScaledSheet.create({
  container: {
    padding: 0,
    marginBottom: 9,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: variables.gallery,
    backgroundColor: variables.white
  },
  priceBlock: {
    paddingTop: 16,
  },
  priceBlockContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: variables.gallery,
    ...paddingUtil(1, 16, 16, 16)
  },
  priceBlockContainerButton: {
    fontSize: '12@ms',
  },
  regularContainer: {
    position: 'absolute',
    right: -16,
    top: 3,
    backgroundColor: variables.linkWater,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    ...paddingUtil(1, 9, 1, 9)
  },
  regularText: {
    color: variables.cerulean,
  },
  dateTravelContainer: {
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 4
  },
  priceBlockPrices: {
    marginLeft: 15,
  },
  dateTravelIcon: {
    fontSize: '24@ms',
  },
  dateTravelValue: {
    marginLeft: 14,
    color: variables.doveGray
  },
  originAddressIcon: {
    fontSize: '29@ms'
  },
  originAddressIconDisabled: {
    color: variables.silverChalice
  },
  priceBlockCash: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.linkWater,
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 6
  },
  priceBlockTotal: {
    color: variables.mineShaft,
    textAlign: 'left',
    fontSize: '16@ms'
  },
  priceBlockTotalNav: {
    textAlign: 'left',
    fontSize: '16@ms',
    color: variables.coriousBlue,
},

  priceBlockPricesName: {
    textAlign: 'left',
    fontSize: '12@ms',
    color: variables.doveGray
  },
  containerAddressText: {
    marginLeft: 9,
    maxWidth: "95%",
  },
  containerAddressTextName: {
    fontSize: '12@ms',
    color: variables.doveGray,
    textAlign: 'left'
  },
  addressLineContainer: {
    marginLeft: 1,
  },
  containerAddressValue: {
    color: variables.mineShaft,
    fontSize: '16@ms',
  },
  destinationAddressContainer:{
    alignItems: 'center'
  },
  originAddressContainer: {
    alignItems: 'center'
  },
  dateInfoContainer: {
    alignItems: 'center'
  },
  dateDaysText: {
    color: variables.cerulean
  },
  dateHoursText: {
    color: variables.orangePeel
  },
  dateDaysIcon: {
    color: variables.cerulean,
    paddingRight: 10
  },
  dateHoursIcon: {
    color: variables.orangePeel,
    paddingRight: 10
  },
  dateMinutesIcon: {
    color: variables.fruitSalad,
    paddingRight: 10
  },
  dateMinutesText: {
    color: variables.fruitSalad
  },
  rideWasCaughtU: {
    backgroundColor: variables.fruitSalad,

    color: variables.white,
    borderRadius: 50,
    ...paddingUtil(3, 10, 3, 10)
  },
  rideWasCaught: {
    backgroundColor: variables.gallery,
    borderRadius: 50,
    ...paddingUtil(3, 10, 3, 10)
  },
  rideWasCaughtText: {
    fontFamily: 'Heebo-Regular',
    fontSize: '14@ms',
    color: variables.mineShaft

  },
  rideWasCaughtTextU: {
    fontFamily: 'Heebo-Regular',
    fontSize: '14@ms',
    color: variables.white
  },
  travelInfoBlock: {
    padding: 16,
  },
  catchingContainer: {
    justifyContent: 'center',
    width: '100%',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    ...paddingUtil(16, 0, 16, 0),
    backgroundColor: variables.linkWater

  },
  catchingContainerButton: {
    width: 125,
    minWidth: 125,
    marginHorizontal: 10,
  }

});
export default styles;
