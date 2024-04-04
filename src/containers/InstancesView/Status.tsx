import React from 'react';
import { StyleSheet, View } from 'react-native';
import variables from 'assets/styles/variables';
import { TripStatus } from 'types/orders';

const styles = StyleSheet.create({
  main: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 5,
  },
});

interface iProps {
  status: TripStatus;
}

const Status: React.FC<iProps> = ({ status }) => {
  const getColor = () => {
    switch (status) {
    case 'Done': return variables.orange;
    case 'Started': return variables.blue;
    default: return variables.danger;
    }
  };

  return (<View style={[styles.main, { backgroundColor: getColor() }]} />);
};

export default Status;
