import { StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';

const styles = StyleSheet.create({
  containerSkeleton: { height: 280, backgroundColor: variables.athensGray ,flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: { height: 40, width: 40, borderRadius: 0 },
  textContainer: { flex: 1, marginLeft: 16 },
  title: { width: 90, height: 14, borderRadius: 7, marginBottom: 5 },
  subtitle: { width: 50, height: 14, borderRadius: 7 },
  iconSkeleton: { height: 30, width: 30, borderRadius: 4 },
  iconLineSkeleton :{ height: 30, width: 3, borderRadius: 4 }
});
export default styles;
