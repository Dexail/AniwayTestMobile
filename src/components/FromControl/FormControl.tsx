import React from 'react';
import { Controller } from 'react-hook-form';
import { svgIcons } from 'components/Icon';
import styles from './styles';
import Input from '../Input/Input';
import Text from '../Text/Text';

type FormControlType = {
  type?: 'text' | 'password';
  name: string;
  placeholder?: string;
  control: any;
  errors: any;
  icon?: keyof typeof svgIcons;
};

const FormControl: React.FC<FormControlType> = ({
  type = 'text',
  name,
  placeholder,
  control,
  errors,
  icon,
}) => {
  const render = ({ field: { value, onChange }}: any) => {
    switch (type) {
    default:
      return (
        <Input
          type={type}
          value={value}
          error={!!errors[name]}
          placeholder={placeholder || name}
          onChange={onChange}
          icon={icon}
        />
      );
    }
  };

  return (
    <>
      <Controller name={name} control={control} render={render} />
      {!!errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
    </>
  );
};

export default FormControl;
