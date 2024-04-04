import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HStack } from '@react-native-material/core';
import { useTranslation } from 'react-i18next';
import styles from 'assets/styles/arrivedButtonStyles'

export interface IArrivedButtonProps {
  onHandleClick: () => void;
}

export const ArrivedButton = ({onHandleClick}: IArrivedButtonProps) => {
  const { t } = useTranslation();
  return (<View>
    <TouchableOpacity onPress={onHandleClick}>
      <HStack style={styles.container}><Text style={styles.text}>{t('common:i-have-arrived')}</Text></HStack>
    </TouchableOpacity>
  </View>)
}
