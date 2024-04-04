import variables from "assets/styles/variables";
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  headerContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  headerAddress: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerAddressBlock: {
    alignItems: 'center',
  },
  headerAddressBlockLogo: {
    paddingRight: 10
  },
  headerArrivedButton: {
  },
  originAddressValue: {
    fontSize: '18@ms',
    textAlign: 'left',
    color: variables.coriousBlue,
  },
  originAddressTitle: {
    color: variables.black,
    fontSize: '19@ms',
  },
  info:{
    width: "100%",
    justifyContent: "space-between"
  }
});
export default styles;
