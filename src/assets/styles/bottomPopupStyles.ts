import { StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';

const styles = StyleSheet.create({
  modalContainerSafeA: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  popupContainer: {
    backgroundColor: 'white',
    minHeight: 103,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  popupContainerElement: {
    width: 30,
    height: 5,
    marginTop: 9,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    marginBottom: -15,
    zIndex: 1,
    backgroundColor: variables.iron
  },
  hideBlock: {
    display: 'flex',
    flex: 1,
  }
});

export default styles;
