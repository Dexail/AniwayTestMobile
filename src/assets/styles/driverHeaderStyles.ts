import paddingUtil from 'utils/paddingUtil';
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const driverHeaderStyles = ScaledSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    minHeight: 98,
    ...paddingUtil(9, 16, 9, 16),
  },
  contentMapView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: variables.athensGray,
  },
  title: {
    color: 'rgba(0, 0, 0, 0.87))',
    fontSize: '16@ms',
    fontWeight: '500',
    marginTop: 6,
  },
  logoIcon: {
    width: 83,
    height: '45@ms',
    // fontSize: 24
  },
  menuIcon: {
    fontSize: '26@ms',
    color: variables.boulder
  },
  statusIcon: {
    width: 49,
  },
  additionalMenu: {
    marginTop: 6,
    fontSize: '26@ms',
    color: variables.boulder
  }
});

export default driverHeaderStyles;
