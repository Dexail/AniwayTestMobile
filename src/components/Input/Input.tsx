import React from 'react';
import Icon, { svgIcons } from 'components/Icon';
import { TextInput, View, StyleProp, TextStyle } from 'react-native';
import commonStyles from 'assets/styles/commonStyles';
import variables from 'assets/styles/variables';
import styles from './styles';

type InputType = {
  type?: 'text' | 'password';
  value: string;
  error?: boolean;
  placeholder?: string;
  icon?: keyof typeof svgIcons;
  style?: StyleProp<TextStyle>;
  onChange: (value: string) => void;
};

const Input: React.FC<InputType> = ({
  type = 'text',
  value,
  error,
  placeholder,
  icon,
  style,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={variables.gray}
        secureTextEntry={type === 'password'}
        selectionColor={variables.main}
        cursorColor={variables.main}
        autoCapitalize="none"
        autoComplete="off"
        style={[
          styles.control,
          commonStyles.fontWeightLight,
          !!icon && styles.controlIcon,
          error && [styles.controlError, commonStyles.fontWeightMedium],
          style,
        ]}
      />
      {!!icon && <Icon isSvg={true} name={icon} style={[styles.icon, error && styles.iconError]} />}
    </View>
  );
};

export default Input;
