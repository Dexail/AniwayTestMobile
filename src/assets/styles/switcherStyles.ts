import { Platform } from 'react-native';
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  containerBox: {
    position: 'relative',
    width: 90,
    height: 36,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIcon: {
    ...Platform.select({
      ios: {
        paddingTop: 5,
      },
      android: {
        paddingTop: 1,
      },
      default: {
        paddingTop: 5,
      },
    }),
  },
  circleText: {
    fontSize: '13@ms',
    position: 'absolute',
    width: 60,
    color: variables.white,
    fontFamily: 'Heebo-Regular',
    fontWeight: '500',
    ...Platform.select({
      ios: {
        left: 15,
        top: 6,
      },
      android: {
        left: -80,
      },
      default: {
        left: 25,
        top: 5,
      },
    }),
  },
  circleTextOn: {
    ...Platform.select({
      ios: {
        left: -75,
        top: 6,
      },
      android: {
        left: 14,
      },
      default: {
        // other platforms, web for example
        left: -75,
      },

    }),
  }
});
export default styles;
