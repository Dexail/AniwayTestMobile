import { Dimensions, Platform, StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';
import paddingUtil from 'utils/paddingUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockInfo: {
    padding: 16,
  },
  blockInfoTitle: {
    paddingTop: 5,
    paddingBottom: 10,
    textAlign: 'left'
  },
  blockDetails: {
    borderRadius: 8,
    backgroundColor: variables.white,
    borderWidth: 1,
    borderColor: variables.gallery,
    ...paddingUtil(6, 16,6,16)
  },
  divideElement: {
    width: '100%',
    height: 25,
    backgroundColor: variables.athensGray,
  },
  detailsElement: {
    marginTop: 13,
    marginBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailsElementText: {
    color: variables.doveGray
  },
  detailsElementValue: {},
  bottomSheet: {
    backgroundColor: 'white'
  },
  headerWrapper: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: variables.gray,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  date: {
    display: 'flex',
    fontSize: 16,
    color: variables.silver,
  },
  dateTitle:{
    fontSize: 16,
    marginHorizontal:10
  },
  title: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  contentWrapper: {
    flexDirection: 'column',
  },
  item: {
    zIndex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  addressWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  address: {
    fontSize: 16,
    color: variables.mineShaft,
  },
  placeholder: {
    color: variables.silver,
    fontSize: 12,
  },
  pointsLineWrapper: {
    height: '100%',
    position: 'absolute',
    left: 17.3,
  },
  pointsLine: {
    flex: 1,
    marginTop: 37,
    marginBottom: 17,
    borderRightWidth: 1,
    borderRightColor: variables.gray,
    borderStyle: Platform.OS === 'ios' ? 'solid' : 'dashed',
  },
  priceContainer: {
    borderWidth: 1,
    padding: 16,
    backgroundColor: variables.white,
    borderColor: variables.gallery,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  originAddressContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  finishedAddressContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  originAddressBlock: {
    alignItems: 'center',
  },
  originAddressIcon: {},
  containerAddressText: {
    marginLeft: 6
  },
  originAddressTime: {
    color: variables.doveGray,
  },
  waypoint: {
    justifyContent: 'space-between',
    position: 'relative'
  },
  waypointBlock: {
    alignItems: 'center',
  },
  waypointTitle: {
    marginBottom: 10,
  },
  containerAddressValue: {
  },
  waypointLineS: {
    marginTop: -15,
    marginLeft: 11,
    marginBottom: -5,
    height: 25,
    width: 2,
    backgroundColor: variables.rajah
  },
  waypointImage: {
    marginLeft: -10,
  },
  containerAddressTextName: {
    color: variables.doveGray,
    textAlign: 'left'
  },
  headerBlock:{
    paddingBottom: 19,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: variables.gallery
  },
  startOfTravel: {
    margin: 9
  },
  callElement: {
  },
  callElementIcon: {
    height: 80,
    width: 80,
    marginRight: -15,
    marginBottom: -18
  },
  infoWaypoints: {
    marginTop: 10,
    paddingHorizontal: 20,
  }
});

export default styles;
