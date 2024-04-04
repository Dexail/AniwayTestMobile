import { StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';
import paddingUtil from 'utils/paddingUtil';

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    ...paddingUtil(10, 21, 10, 21)
  },
  dangerButton: {
    borderWidth: 1,
    borderColor: variables.danger,
  },
  disabled: {
    opacity: 0.5,
  },
  iconOnly: {
    width: 45,
    height: 45,
    minWidth: 'auto',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  link: {
    width: 'auto',
    minWidth: 'auto',
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  linkWithIcon: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  primary: {
    borderWidth: 0,
    backgroundColor: variables.main,
  },
  danger: {
    borderWidth: 0,
    backgroundColor: variables.danger,
  },
  linkText: {
    textAlign: 'auto',
    color: variables.info,
  },
  linkIcon: {
    width: 27,
    height: 27,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  dangerText: {
    fontSize: 16,
    color: variables.danger,
  },
  primaryText: {
    fontSize: 15,
    textAlign: 'center',
    color: variables.white,
  },
  disabledText: {
    textAlign: 'center',
  },
  primaryB: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' },
  disabledB: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' },
  icon: {
    color: variables.white,
  },
});

export default styles;
