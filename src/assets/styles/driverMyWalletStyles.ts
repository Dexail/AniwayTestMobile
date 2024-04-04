import { Dimensions, StyleSheet } from 'react-native';
import paddingUtil from 'utils/paddingUtil';
import variables from 'assets/styles/variables';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  mainCointainer: {
    padding: 15,
  },
});
export default styles;
