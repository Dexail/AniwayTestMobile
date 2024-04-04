import variables from 'assets/styles/variables';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    justifyContent: 'space-between',
  },
  scrollView: {
    maxHeight: 33,
  },
  tabItem: {
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: variables.mercury,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewInfo: {
    flex: 1
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: variables.azureRadiance,
  },
  activeTabText: {
    fontSize: '12@ms',
    fontWeight: '500',
    fontFamily: 'Heebo-Medium',
    color: variables.azureRadiance,
  },
  tabText: {
    fontSize: '12@ms',
    fontWeight: '500',
    fontFamily: 'Heebo-Medium',
    color: variables.doveGray,
  },
  tabContent: {
    flex: 1,
  },
});
export default styles;
