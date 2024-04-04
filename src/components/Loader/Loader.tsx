import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import variables from 'assets/styles/variables';

const styles = StyleSheet.create({
  headerWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: variables.gray,
  }
});

const Loader = () => {
  return (<View style={styles.headerWrapper}>
    <ActivityIndicator size={80} color={variables.main} />
  </View>);
};

export default Loader;
