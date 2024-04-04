import variables from "assets/styles/variables";
import paddingUtil from 'utils/paddingUtil';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    bottom: 23,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 23,
  },
  block: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3, // Для Android
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: variables.white,
    ...paddingUtil(13, 16, 19, 16)
  },
  title: {
    fontSize: '12@ms',
    color: variables.prussianBlue
  },
  blockInfo: {
    marginLeft: 12,
    alignItems: 'flex-start'
  },
  blockAddressInfo: {
    alignItems: 'flex-start',
    marginTop: 4,
  },
  text: {
    color: variables.prussianBlue
  },
  actionButton: {
    marginTop: 15,
  }
});
export default styles;
