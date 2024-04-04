import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerWrapper: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    zIndex: 999,
    display: 'flex',
  },
  title: {
    fontSize: 18,
    flexGrow: 1,
    textAlign: 'center',
    marginRight: 34,
  },
  withBackBtn: {
    marginRight: 0,
  },
});

export default styles;
