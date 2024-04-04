import { Platform, StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';

const commonStyles = StyleSheet.create({
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
  originAddressBlockDisable: {
    opacity: .5,
  },
  originAddressIcon: {
    marginLeft: 2,
  },
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
    marginTop: -5,
    marginLeft: 11,
    marginBottom: -5,
    height: 25,
    width: 2,
    borderWidth: 1,
    borderColor: variables.mercury,
    borderStyle: 'dashed',
  },
  waypointLineSmini: {
    marginTop: -15,
    marginLeft: 11,
    marginBottom: -5,
    height: 25,
    width: 2,
    borderWidth: 1,
    borderColor: variables.mercury,
    borderStyle: 'dashed',
  },
  waypointImage: {
    marginLeft: 2,
  },
  waypointPassengers: {
    alignItems: 'flex-start'
  },
  containerAddressTextName: {
    color: variables.doveGray,
    textAlign: 'left'
  },
  passengersContactIcon: {
    paddingRight: 5
  },
  passengersContactTitle: {
    paddingRight: 8,
    color: variables.doveGray
  },
  passengers: {
    alignItems: 'center'
  },
  originDestinationIcon: {
    marginLeft: 2,
    height: 25,
    width: 23
  }
});

export default commonStyles;
