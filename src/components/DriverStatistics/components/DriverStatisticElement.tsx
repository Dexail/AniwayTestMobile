import React from 'react';
import { Box, HStack } from '@react-native-material/core';
import { Text } from 'react-native';
import styles from 'assets/styles/driverStatisticsStyles';
import IconComponent, { svgIcons } from 'components/Icon';

export interface IDriverStatisticElementProps{
  title: string;
  icon: keyof typeof svgIcons;
  value: number;
  symbol?: string;
}
export const DriverStatisticElement = ({ title, icon, value, symbol }: IDriverStatisticElementProps) => {
  return (<HStack style={styles.container}
  >
    <Box style={styles.iconContainer}>
      <IconComponent name={icon} isSvg={true} style={styles.icon}/>
    </Box>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.value}>{symbol} {value}</Text>
  </HStack>);
};
