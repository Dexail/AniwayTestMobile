import { Dimensions, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;
console.log(deviceWidth);
console.log(deviceHeight);
const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight - 32,
  },
  mapStyle: {
    top: 1,
    width: "100%",
    height: "100%",
  },
  details: {
    backgroundColor: 'blue',
    height: 'auto',
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
    width: "100%",
  }
});
export default styles;
