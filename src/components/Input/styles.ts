import { StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 20,
    width: 20,
    color: variables.gray,
    textAlign: 'center',
  },
  iconError: {
    color: variables.danger,
  },
  control: {
    fontSize: 14,
    textAlign: 'right',
    color: variables.mineShaft,
    borderColor: variables.gray,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 7,
    borderWidth: 1,
  },
  controlError: {
    color: variables.danger,
    borderColor: variables.danger,
  },
  controlIcon: {
    paddingLeft: 50,
  },
});

export default styles;
