import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const commonStyles = ScaledSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: 13,
  },
  selectedElement: {
    backgroundColor: variables.linkWater
  },
  selectedElementBlock:{
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  selectedElementIcon: {
    fontSize: '24@ms',
    marginLeft: 'auto'
  },
  selectedElementTouchable: {
    width: '100%'
  },
  element: {
    width: '100%',
    alignItems: 'center',
    minHeight: 48,
    paddingLeft: 18,
    paddingRight: 18,
  }
});

export default commonStyles;
