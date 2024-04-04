import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceholderImg from 'assets/icons/placeholder.svg';
import Text from 'components/Text';

const styles = StyleSheet.create({
  headerWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    marginTop: 25,
    fontWeight:'bold'
  },
  subLabel:{
    fontSize: 14,
    marginTop: 20,
  }
});

const Placeholder = () => {
  return (<View style={styles.headerWrapper}>
    <PlaceholderImg />
    <Text style={styles.label}>אין נסיעות ליום זה</Text>
    <Text style={styles.subLabel}>נסיעות חדשות יופיעו כאן</Text>
  </View>);
};

export default Placeholder;
