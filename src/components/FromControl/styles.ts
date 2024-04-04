import { StyleSheet } from 'react-native';
import variables from 'assets/styles/variables';

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginBottom: 5,
  },
  error: {
    fontSize: 12,
    textAlign: 'left',
    color: variables.danger,
    marginTop: 5,
  },
});

export default styles;
