import { StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    width: 115,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: variables.mainButton[1]
  },
  text: {
    fontFamily: 'Heebo-Regular',
    fontSize: '12@ms',
    color: variables.white
  }
});

export default styles;
