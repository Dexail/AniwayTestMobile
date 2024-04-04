import { Platform, StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    zIndex: 9999,
    ...Platform.select({
      ios: {
        bottom: 0,
      },
      android: {
        bottom: 35,
      },
      default: {
        bottom: 0,
      },
    }),
    backgroundColor: variables.white,
  },
});

export default styles;
