import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  dialog: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 25,
    minHeight: 250,
    borderRadius: 30,
    overflow: 'visible',
    justifyContent: 'space-between',

  },
  textTitle: {
    color: variables.black,
    fontSize: '18@ms',
  },
  content: {
    marginTop: 50,
  },
  addressInfo: {
    justifyContent: 'space-between',
    marginTop: 40,
    width: '100%',
  },
  addressText: {
 flex:1, textAlign: 'left' ,
    fontSize: '14@ms',
    color: variables.mineShaft,
  },
  icon: {
    top: -50,
    position: 'absolute',
  },
  title: {
    textAlign: 'left',
    marginTop: 20,
    fontSize: '16@ms',
    color: variables.black
  },
  phone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
});
export default styles;
