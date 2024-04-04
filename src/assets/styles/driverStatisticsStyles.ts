import paddingUtil from 'utils/paddingUtil';
import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    width: '100%',
    borderRadius: 9,
    backgroundColor: variables.white,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 123, 181, 0.08)',
    padding: 15,
    borderRadius: 9,
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Heebo-Regular',
    color: variables.silver,
    marginLeft: 15,
    maxWidth: 165,
    fontSize: '14@ms',
    textAlign: 'left',
  },
  value: {
    fontFamily: 'Heebo-SemiBold',
    marginLeft: 'auto',
    fontSize: '24@ms',
    color: variables.deepCerulean,
    fontWeight: 'bold',
  },
  headerBlockInfo: {
    textAlign: 'left',
    ...paddingUtil(25, 0, 25, 0)
  },
});
export default styles;
