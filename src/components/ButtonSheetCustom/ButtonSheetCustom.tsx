import React from 'react';
import { Box } from '@react-native-material/core';
import Button from 'components/Button';
import buttonSheetCustomStyles from 'assets/styles/ButtonSheetCustomStyles';

export interface IButtonSheetCustomProps {
  isDisabled: boolean;
  title: string;
  handleOnStart: () => void;
}

export default function ButtonSheetCustom({handleOnStart, title, isDisabled}: IButtonSheetCustomProps) {
  return (<Box style={buttonSheetCustomStyles.container}>
    <Button
      disabled={!isDisabled}
      title={title}
      onClick={() => handleOnStart()}
    />
  </Box>);
}
