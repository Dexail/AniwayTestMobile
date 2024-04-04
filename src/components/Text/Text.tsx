import React from 'react';
import { Text as RNText, StyleProp, TextStyle } from 'react-native';
import commonStyles from 'assets/styles/commonStyles';
import styles from './styles';

type TextType = {
  font?: 'light' | 'medium' | 'bold';
  lines?: number;
  style?: StyleProp<TextStyle>;
  children?: any;
};

const Text: React.FC<TextType> = ({
  font = 'medium',
  lines,
  style,
  children,
}) => {
  return (
    <RNText
      numberOfLines={lines}
      style={[
        font === 'light' && commonStyles.fontWeightLight,
        font === 'medium' && commonStyles.fontWeightMedium,
        font === 'bold' && commonStyles.fontWeightBold,
        styles.default,
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
