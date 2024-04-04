import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';

type FormGroupType = {
  style?: StyleProp<ViewStyle>;
  children: any;
};

const FormGroup: React.FC<FormGroupType> = ({ style, children }) => {
  return <View style={[styles.group, style]}>{children}</View>;
};

export default FormGroup;
