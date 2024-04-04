import React from 'react';
import variables from 'assets/styles/variables';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 999,
    position: 'absolute',
    backgroundColor: variables.white,
    opacity: 0.6,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const LoadingMore = () => {
  return (<View style={styles.wrapper}>
    <ActivityIndicator size={40} color={variables.main} />
  </View>);
};

export default LoadingMore;
